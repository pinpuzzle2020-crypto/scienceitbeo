# 구글 시트 연동 설정 가이드

상담 예약 폼 데이터가 자동으로 구글 시트에 저장되도록 설정하는 방법입니다.

---

## 1단계: 구글 시트 만들기

1. [Google Sheets](https://sheets.google.com)에 접속
2. **빈 스프레드시트** 새로 만들기
3. 시트 이름을 `상담예약` 으로 변경 (하단 탭 우클릭 → 이름 바꾸기)
4. **1행(헤더)** 에 아래와 같이 입력:

| A | B | C | D | E |
|---|---|---|---|---|
| 접수일시 | 학부모 성함 | 연락처 | 자녀 학년 | 문의 사항 |

---

## 2단계: Apps Script 작성

1. 구글 시트 상단 메뉴에서 **확장 프로그램 → Apps Script** 클릭
2. 기본 코드(`myFunction`)를 **전부 삭제**하고, 아래 코드를 **복사-붙여넣기**:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("상담예약");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }
    
    var data = JSON.parse(e.postData.contents);
    
    // 한국 시간 (KST)
    var now = new Date();
    var kst = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    var timestamp = Utilities.formatDate(kst, "GMT", "yyyy-MM-dd HH:mm:ss");
    
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      data.grade || "",
      data.message || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Ctrl+S** (또는 💾 아이콘)로 저장. 프로젝트 이름은 `상담예약폼` 등으로 설정

---

## 3단계: 웹 앱으로 배포

1. Apps Script 편집기 상단의 **배포 → 새 배포** 클릭
2. ⚙️ 아이콘 → **웹 앱** 선택
3. 설정:
   - **설명**: 상담 예약 폼 연동
   - **다음 사용자 권한으로 실행**: `나` (본인 계정)
   - **액세스 권한이 있는 사용자**: `모든 사용자`
4. **배포** 클릭
5. **권한 승인** 요청이 뜨면:
   - "고급" 클릭 → "안전하지 않은 페이지로 이동" 클릭 → "허용"
6. 표시되는 **웹 앱 URL**을 복사 (아래와 비슷한 형태):
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## 4단계: 프로젝트에 URL 설정

프로젝트 루트의 `.env.local` 파일에 복사한 URL을 붙여넣기:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/여기에_복사한_URL/exec
```

> ⚠️ `.env.local` 파일을 수정한 후에는 개발 서버를 **재시작**해야 합니다.

---

## 테스트

1. 개발 서버 재시작 (`npm run dev`)
2. http://localhost:3000 접속 → 상담 예약 섹션
3. 테스트 데이터 입력 후 "상담 예약하기" 클릭
4. 구글 시트를 열어 데이터가 추가되었는지 확인

---

## 문제 해결

| 증상 | 해결 방법 |
|------|----------|
| "서버 오류" 메시지 | `.env.local`의 URL이 정확한지 확인 |
| 구글 시트에 데이터 없음 | Apps Script 배포 시 "모든 사용자"로 설정했는지 확인 |
| 권한 오류 | Apps Script 재배포 (배포 → 배포 관리 → 새 버전) |
