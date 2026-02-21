const slidesData = [
    {
        label: "표지",
        className: "cover-slide",
        html: `
      <div class="slide-inner">
        <div class="cover-badge">SPONSORSHIP PROPOSAL 2026</div>
        <h1 class="cover-title">HyphenCon<br>2026</h1>
        <p class="cover-sub">개인 상금 기반 24시간 MVP 제작·시장검증 프로그램<br>후원 제안서 (Full Version)</p>
        <div class="cover-meta">
          <div class="cover-meta-item">
            <div class="cover-meta-label">주최</div>
            <div class="cover-meta-value">하이픈콘 팀</div>
          </div>
          <div class="cover-meta-item">
            <div class="cover-meta-label">총괄</div>
            <div class="cover-meta-value">박준원</div>
          </div>
          <div class="cover-meta-item">
            <div class="cover-meta-label">일시</div>
            <div class="cover-meta-value">2026년 (토~일) 24h+</div>
          </div>
          <div class="cover-meta-item">
            <div class="cover-meta-label">문서버전</div>
            <div class="cover-meta-value">v2.0 Full</div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">Scroll or Press Arrow Keys</div>
    `
    },
    {
        label: "목차",
        html: `
      <div class="slide-inner">
        <div class="slide-label">CONTENTS</div>
        <h2 class="slide-title">목차</h2>
        <div class="card-grid cols-3" style="font-size:.88rem">
          <div class="card" style="cursor:pointer"><span class="highlight">01</span> Executive Summary</div>
          <div class="card"><span class="highlight">02</span> 해결하는 문제</div>
          <div class="card"><span class="highlight">03</span> 프로그램 설계</div>
          <div class="card"><span class="highlight">04</span> 운영 계획</div>
          <div class="card"><span class="highlight">05</span> 심사·평가 체계</div>
          <div class="card"><span class="highlight">06</span> 채용 연계 설계</div>
          <div class="card"><span class="highlight">07</span> 홍보 / PR / 언론</div>
          <div class="card"><span class="highlight">08</span> 후원사 가치 & 노출</div>
          <div class="card"><span class="highlight">09</span> 현금 후원 패키지</div>
          <div class="card"><span class="highlight">10</span> 예산표 시나리오</div>
          <div class="card"><span class="highlight">11</span> 팀 소개</div>
          <div class="card"><span class="highlight">12</span> 운영 실적 / 정산</div>
        </div>
      </div>
    `
    },
    {
        label: "Executive Summary",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 01</div>
        <h2 class="slide-title">Executive Summary</h2>
        <p class="slide-subtitle">개인 창업가가 직접 상금을 걸고, 1020 학생 개발자 팀이 <span class="highlight">24시간 안에 배포 가능한 MVP</span>를 제작하며, VC/현업 개발팀 평가까지 받는 실전형 프로그램입니다.</p>
        <div class="card-grid cols-2">
          <div class="card">
            <div class="card-icon" style="font-family:var(--font-en);font-weight:900;">01</div>
            <div class="card-title">상금 주체 = Founder</div>
            <div class="card-desc">검증 의지가 있는 아이템만 진입 → 결과물 활용도 극대화</div>
          </div>
          <div class="card">
            <div class="card-icon" style="font-family:var(--font-en);font-weight:900;">02</div>
            <div class="card-title">동일 아이템 복수 팀</div>
            <div class="card-desc">UX/기능 우선순위가 다른 복수 대안 확보 → 비교 선택 가능</div>
          </div>
          <div class="card">
            <div class="card-icon" style="font-family:var(--font-en);font-weight:900;">03</div>
            <div class="card-title">지원사업에 바로 쓰는 제출물</div>
            <div class="card-desc">배포 링크 + 레포 + README + 데모 발표 = 설명 가능한 결과물</div>
          </div>
          <div class="card">
            <div class="card-icon" style="font-family:var(--font-en);font-weight:900;">04</div>
            <div class="card-title">VC·현업 개발팀 평가</div>
            <div class="card-desc">제품 가능성 + 기술 구조 + 실행력 동시 검증 → 채용 연결</div>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "Founder의 문제",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 02-A</div>
        <h2 class="slide-title">Founder의 문제</h2>
        <p class="slide-subtitle">"프로덕트가 없어서 검증/지원사업이 막힘"<br>창업 초기엔 <span class="highlight-warm">"돈"보다 창업가의 시간</span>이 더 비쌉니다.</p>
        <div class="card-grid cols-2">
          <div class="card">
            <div class="card-title">디자인 병목</div>
            <div class="card-desc">화면 구조·UX를 어떻게 할지 결정 불가</div>
          </div>
          <div class="card">
            <div class="card-title">플로우 설계</div>
            <div class="card-desc">기능을 어떤 화면에 어떻게 녹여낼지 난감</div>
          </div>
          <div class="card">
            <div class="card-title">개발·배포 시간</div>
            <div class="card-desc">개발·배포·오류 해결에 걸리는 시간 과다</div>
          </div>
          <div class="card">
            <div class="card-title">기회비용 불균형</div>
            <div class="card-desc">사업계획서/시장검증/영업 시간을 개발이 잡아먹음</div>
          </div>
        </div>
        <p style="margin-top:24px;color:var(--accent-2);font-weight:700;font-size:1.1rem;text-align:center">→ 하이픈콘은 MVP 제작 시간을 <span class="highlight-warm">하루</span>로 압축합니다.</p>
      </div>
    `
    },
    {
        label: "Builder의 문제",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 02-B</div>
        <h2 class="slide-title">Builder(학생 개발자)의 문제</h2>
        <div class="two-cols">
          <div>
            <p class="slide-subtitle" style="margin-bottom:20px">'바이브코딩'의 현실 — 비전공자는 "가능하지만 느림"</p>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">스코프(범위) 설정 실패 → 과대 범위로 지연</div>
            </div>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">UX/디자인 정리 지연 → 화면 설계에서 멈춤</div>
            </div>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">배포/운영 요소에서 정체</div>
            </div>
            <div class="card">
              <div class="card-desc">품질 검증(테스트/에러 케이스) 어려움</div>
            </div>
          </div>
          <div>
            <p class="slide-subtitle">채용에서 요구되는 실전 경험의 부재</p>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">협업 역량 (팀 작업, PR/리뷰, 커뮤니케이션)</div>
            </div>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">제한된 자원 내 범위 조정 (MVP 스코핑)</div>
            </div>
            <div class="card" style="margin-bottom:12px">
              <div class="card-desc">배포 경험 (작동 상태로 완결하는 능력)</div>
            </div>
            <div class="card">
              <div class="card-desc">이해관계자 대상 발표 및 논리적 설득</div>
            </div>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "프로그램 설계",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 03-A</div>
        <h2 class="slide-title">프로그램 설계 — 참가 구조</h2>
        <div class="card-grid cols-4">
          <div class="card" style="border-top:3px solid var(--accent-1)">
            <div class="role-badges"><span class="role-badge founder">Founder</span></div>
            <div class="card-desc" style="margin-top:8px">상금 설정(기본 30만원/트랙)<br>문제 브리프 제출<br>트랙 Q&A 참여<br>최종 심사 참여</div>
          </div>
          <div class="card" style="border-top:3px solid var(--accent-2)">
            <div class="role-badges"><span class="role-badge builder">Builder</span></div>
            <div class="card-desc" style="margin-top:8px">2~5인 구성<br>24시간 내 MVP 제작·배포<br>발표·제출(필수)<br>VC/현업 평가 수령</div>
          </div>
          <div class="card" style="border-top:3px solid var(--accent-4)">
            <div class="role-badges"><span class="role-badge judge">Judge</span></div>
            <div class="card-desc" style="margin-top:8px">평가표 기반 점수화<br>팀별 피드백 제공<br>(옵션) 채용/후속 미팅 연계</div>
          </div>
          <div class="card" style="border-top:3px solid var(--accent-5)">
            <div class="role-badges"><span class="role-badge ops">운영팀</span></div>
            <div class="card-desc" style="margin-top:8px">스코프 클리닉<br>체크포인트 운영<br>제출/심사/아카이빙<br>안전/현장 운영</div>
          </div>
        </div>
        <div class="stat-row" style="margin-top:32px">
          <div class="stat-item">
            <div class="stat-number">3~5</div>
            <div class="stat-label">트랙(아이템)</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3~8</div>
            <div class="stat-label">트랙당 참여팀</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24h</div>
            <div class="stat-label">개발 시간</div>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "MVP 스코프 & 결과물",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 03-B</div>
        <h2 class="slide-title">MVP 스코프 & Founder 결과물</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--accent-2)">24시간 MVP 스코프(표준)</h3>
            <ul class="checklist">
              <li>핵심 기능 <strong>3개 이내</strong></li>
              <li>사용자 플로우 <strong>1회 완주</strong>(가입→입력→결과)</li>
              <li>더미/모킹 허용(사용자 경험 성립 조건)</li>
              <li><strong>배포 가능 상태</strong>로 종료(로컬 실행만 ✕)</li>
            </ul>
          </div>
          <div>
            <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--accent-4)">Founder가 받는 결과물 패키지</h3>
            <div class="card" style="margin-bottom:12px;border-left:3px solid var(--accent-5)">
              <div class="card-title" style="font-size:.85rem;color:var(--accent-5)">필수(모든 팀)</div>
              <div class="card-desc">배포 링크 · GitHub 레포 · README · 데모 발표/영상</div>
            </div>
            <div class="card" style="border-left:3px solid var(--accent-4)">
              <div class="card-title" style="font-size:.85rem;color:var(--accent-4)">선택(상위팀)</div>
              <div class="card-desc">1p MVP 요약 · Flow 캡처 · Figma 링크</div>
            </div>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "운영 로드맵",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 04-A</div>
        <h2 class="slide-title">운영 로드맵</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-time">D-30 ~ D-21</div>
            <div class="timeline-content">후원사 1차 컨택/미팅 · Founder 모집 공고 · 장소 확정/견적</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">D-21 ~ D-14</div>
            <div class="timeline-content">Founder 브리프 수집 · 스코프 클리닉 1차 · Builder 모집 공고</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">D-14 ~ D-7</div>
            <div class="timeline-content">트랙 확정 · Builder 팀 구성/매칭 · 심사위원 확정 · 평가표 확정</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">D-7 ~ D-1</div>
            <div class="timeline-content">사전 OT · 운영물품/배너 인쇄 · PR/보도자료 발송</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">D-Day</div>
            <div class="timeline-content">24시간 운영 + 데모데이 + 시상</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-time">D+1 ~ D+7</div>
            <div class="timeline-content">결과물 아카이브 · 후원사 리포트 · 우수팀 후속 미팅</div>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "당일 타임라인",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 04-B</div>
        <h2 class="slide-title">행사 당일 24시간 타임라인</h2>
        <div class="two-cols">
          <div>
            <h3 style="color:var(--accent-2);font-size:.9rem;margin-bottom:12px">DAY 1 (토)</h3>
            <table class="styled-table">
              <tbody>
                <tr>
                  <td style="color:var(--accent-2);font-weight:700;white-space:nowrap">09:00</td>
                  <td>체크인 / 명찰 배부</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-2);font-weight:700">10:00</td>
                  <td>오프닝(룰/안전/제출 기준)</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-2);font-weight:700">10:20</td>
                  <td>후원사 소개 · 감사 멘션</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-2);font-weight:700">10:30</td>
                  <td>Founder 피칭(트랙당 5분)</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-2);font-weight:700">12:00</td>
                  <td>개발 시작</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-4);font-weight:700">16:00</td>
                  <td>체크포인트 #1 (스코프 컷)</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-4);font-weight:700">22:00</td>
                  <td>체크포인트 #2 (배포 점검)</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-3);font-weight:700">02:00</td>
                  <td>심야 안전 점검 · 휴식 유도</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 style="color:var(--accent-4);font-size:.9rem;margin-bottom:12px">DAY 2 (일)</h3>
            <table class="styled-table">
              <tbody>
                <tr>
                  <td style="color:var(--accent-5);font-weight:700;white-space:nowrap">07:00</td>
                  <td>조식 · 배포 도움데스크 오픈</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-3);font-weight:700">09:00</td>
                  <td>제출 마감</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-4);font-weight:700">10:00</td>
                  <td>데모데이(팀당 4분+Q&A 2분)</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-4);font-weight:700">12:00</td>
                  <td>심사 집계</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-1);font-weight:700">12:30</td>
                  <td>시상 · 수상 소감</td>
                </tr>
                <tr>
                  <td style="color:var(--accent-1);font-weight:700">13:00</td>
                  <td>네트워킹 · 정리</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "운영 조직 & 교대",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 04-C</div>
        <h2 class="slide-title">운영 조직 & 야간 교대</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-2)">운영 인력 (최소 10명)</h3>
            <table class="styled-table">
              <tbody>
                <tr><td>총괄</td><td>1명</td><td>전체 의사결정/대외</td></tr>
                <tr><td>진행/타임키핑</td><td>2명</td><td>타임라인, 발표 운영</td></tr>
                <tr><td>접수/CS</td><td>2명</td><td>체크인, 민원</td></tr>
                <tr><td>트랙 매니저</td><td>트랙당 1</td><td>Founder Q&A/공지</td></tr>
                <tr><td>기술 도움데스크</td><td>2명</td><td>배포/깃/서버</td></tr>
                <tr><td>안전/시설</td><td>2명</td><td>야간 포함</td></tr>
                <tr><td>촬영/기록</td><td>1~2명</td><td>사진/영상</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-4)">야간 교대 예시</h3>
            <div class="card" style="margin-bottom:12px;border-left:3px solid var(--accent-4)">
              <div class="card-title">야간 1조</div>
              <div class="card-desc">18:00 ~ 02:00</div>
            </div>
            <div class="card" style="border-left:3px solid var(--accent-2)">
              <div class="card-title">야간 2조</div>
              <div class="card-desc">02:00 ~ 10:00</div>
            </div>
            <p style="margin-top:16px;font-size:.85rem;color:var(--text-muted)">※ 후원사가 불안해하는 "야간에 누가 운영하냐?"를 해소하는 핵심 포인트</p>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "심사·평가 체계",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 05</div>
        <h2 class="slide-title">심사·평가 체계</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-2)">심사위원 구성</h3>
            <div class="card" style="margin-bottom:8px"><div class="card-desc">VC / AC 선임 심사역 (1~2명)</div></div>
            <div class="card" style="margin-bottom:8px"><div class="card-desc">현업 개발 리더 및 CTO (2명)</div></div>
            <div class="card" style="margin-bottom:8px"><div class="card-desc">제품 기획 및 PM/UX 전문가 (1명)</div></div>
            <div class="card"><div class="card-desc">해당 트랙 리드 Founder (1명)</div></div>
          </div>
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-4)">평가 기준 (100점)</h3>
            <table class="styled-table">
              <tbody>
                <tr><td>문제 이해·타깃 적합성</td><td style="text-align:right;color:var(--accent-2);font-weight:700">15점</td></tr>
                <tr><td>MVP 완성도(배포/작동/흐름)</td><td style="text-align:right;color:var(--accent-2);font-weight:700">25점</td></tr>
                <tr><td>시장검증 가능성</td><td style="text-align:right;color:var(--accent-2);font-weight:700">20점</td></tr>
                <tr><td>UX/디자인 명확성</td><td style="text-align:right;color:var(--accent-2);font-weight:700">15점</td></tr>
                <tr><td>기술 구조/확장성</td><td style="text-align:right;color:var(--accent-2);font-weight:700">15점</td></tr>
                <tr><td>발표/설득</td><td style="text-align:right;color:var(--accent-2);font-weight:700">10점</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "채용 연계",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 06</div>
        <h2 class="slide-title">채용 연계 설계</h2>
        <p class="slide-subtitle">하이픈콘 참가자는 다음을 모두 <span class="highlight">"산출물로 증명"</span>합니다.</p>
        <div class="card-grid cols-4">
          <div class="card"><div class="card-icon">01</div><div class="card-title">팀 협업 기록</div><div class="card-desc">커밋/PR/이슈</div></div>
          <div class="card"><div class="card-icon">02</div><div class="card-title">범위 조정</div><div class="card-desc">제한시간 MVP 스코핑</div></div>
          <div class="card"><div class="card-icon">03</div><div class="card-title">배포 완결</div><div class="card-desc">작동 상태로 종료</div></div>
          <div class="card"><div class="card-icon">04</div><div class="card-title">결과 발표</div><div class="card-desc">문제-해결-데모 구조</div></div>
        </div>
        <div class="divider"></div>
        <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-4)">채용 인벤토리 (동의 기반)</h3>
        <div class="card-grid cols-2">
          <div class="card"><div class="card-desc">참가자 프로필 북 (PDF/스프레드시트): 역할/스택/링크</div></div>
          <div class="card"><div class="card-desc">우수 인재 추천 (운영팀 요약 + 심사 코멘트)</div></div>
          <div class="card"><div class="card-desc">채용 세션 10분(현장) + 상담 부스</div></div>
          <div class="card"><div class="card-desc">행사 후 7일 내 희망자 매칭 미팅(온라인)</div></div>
        </div>
      </div>
    `
    },
    {
        label: "홍보 / PR",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 07</div>
        <h2 class="slide-title">홍보 / PR / 언론 계획</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:.95rem;margin-bottom:12px;color:var(--accent-2)">메시지 프레임</h3>
            <div class="card" style="margin-bottom:8px;border-left:3px solid var(--accent-1)"><div class="card-desc">"아이디어 발표가 아니라 24시간 내 배포 가능한 MVP를 만든다."</div></div>
            <div class="card" style="margin-bottom:8px;border-left:3px solid var(--accent-2)"><div class="card-desc">"동일 아이템을 여러 팀이 만들어 대안 비교가 가능하다."</div></div>
            <div class="card" style="margin-bottom:8px;border-left:3px solid var(--accent-4)"><div class="card-desc">"VC/현업 개발팀이 평가해 실무 역량이 검증된다."</div></div>
          </div>
          <div>
            <h3 style="font-size:.95rem;margin-bottom:12px;color:var(--accent-4)">콘텐츠 캘린더 (4주)</h3>
            <table class="styled-table">
              <tbody>
                <tr><td style="color:var(--accent-2);font-weight:700">W-4</td><td>모집 공고 · 카드뉴스</td></tr>
                <tr><td style="color:var(--accent-2);font-weight:700">W-1</td><td>최종 공지 · 카운트다운 · 보도자료</td></tr>
                <tr><td style="color:var(--accent-4);font-weight:700">당일</td><td>현장 사진/스토리 10회+ · 로고 컷</td></tr>
                <tr><td style="color:var(--accent-5);font-weight:700">사후</td><td>리캡 · 하이라이트 영상 · 언론 리캡</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "후원사 가치 & 노출",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 08</div>
        <h2 class="slide-title">후원사가 얻는 가치 & 노출</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:.95rem;margin-bottom:12px;color:var(--accent-2)">현장 노출</h3>
            <table class="styled-table">
              <tbody>
                <tr><td>무대 백드롭 (4m×2.5m)</td><td>상시</td></tr>
                <tr><td>입구 롤업 2개 (80×200)</td><td>상시</td></tr>
                <tr><td>X배너 4개 (60×160)</td><td>상시</td></tr>
                <tr><td>데모데이 대기 화면</td><td>발표 중</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 style="font-size:.95rem;margin-bottom:12px;color:var(--accent-4)">온라인 노출</h3>
            <table class="styled-table">
              <tbody>
                <tr><td>인스타 피드 (로고 포함)</td><td>2~4회</td></tr>
                <tr><td>인스타 스토리 (태그)</td><td>6~10회</td></tr>
                <tr><td>디스코드 공지 (로고)</td><td>2회</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
    },
    {
        label: "후원 패키지",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 09</div>
        <h2 class="slide-title">현금 후원 패키지</h2>
        <div class="card-grid cols-5" style="gap:12px;align-items:start">
          <div class="price-card featured"><div class="price-name">타이틀</div><div class="price-amount">2,000<span>만원</span></div><ul class="price-list"><li>단독 1곳</li><li>행사명 병기</li><li>부스 1개</li><li>소개 10분</li></ul></div>
          <div class="price-card"><div class="price-name">메인</div><div class="price-amount">1,000<span>만원</span></div><ul class="price-list"><li>최대 2곳</li><li>백드롭 상단</li><li>피드 2회</li></ul></div>
          <div class="price-card"><div class="price-name">채용</div><div class="price-amount">500<span>만원</span></div><ul class="price-list"><li>Talent Partner</li><li>채용 세션</li><li>상담 부스</li></ul></div>
          <div class="price-card"><div class="price-name">트랙</div><div class="price-amount">300<span>만원</span></div><ul class="price-list"><li>Track by [사]</li><li>심사위원 1</li><li>리포트 제공</li></ul></div>
          <div class="price-card"><div class="price-name">서포트</div><div class="price-amount">100<span>만원</span></div><ul class="price-list"><li>현장 배너</li><li>리포트 로고</li><li>스토리 1회</li></ul></div>
        </div>
      </div>
    `
    },
    {
        label: "예산 시나리오 1",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 10-A</div>
        <h2 class="slide-title">예산 시나리오 1 — 표준/파일럿</h2>
        <p class="slide-subtitle">60명 / 트랙 3 / 사진+리포트 · <span class="highlight-warm">총 ~12,000,000원</span></p>
        <table class="budget-table">
          <thead><tr><th>항목</th><th>내역</th><th>금액(원)</th></tr></thead>
          <tbody>
            <tr><td colspan="3" style="color:var(--accent-2);font-weight:700">A. 공간/시설</td></tr>
            <tr><td></td><td>장소 대관(24h)</td><td>2,000,000</td></tr>
            <tr><td></td><td>의자/장비 렌탈</td><td>700,000</td></tr>
            <tr><td colspan="3" style="color:var(--accent-2);font-weight:700">B. 인력/운영</td></tr>
            <tr><td></td><td>운영 스태프 8명</td><td>2,000,000</td></tr>
            <tr class="total"><td></td><td>총계 (예시)</td><td>~12,300,000</td></tr>
          </tbody>
        </table>
      </div>
    `
    },
    {
        label: "예산 시나리오 2",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 10-B</div>
        <h2 class="slide-title">예산 시나리오 2 — 확장/PR 강화</h2>
        <p class="slide-subtitle">120명 / 트랙 5 / 사진+영상+언론 · <span class="highlight-warm">총 ~30,000,000원</span></p>
        <table class="budget-table">
          <thead><tr><th>카테고리</th><th>주요 항목</th><th>금액(원)</th></tr></thead>
          <tbody>
            <tr><td>A. 공간/시설</td><td>대형 장소+장비</td><td>6,400,000</td></tr>
            <tr><td>B. 인력/운영</td><td>스태프 12명+야간</td><td>5,800,000</td></tr>
            <tr><td>C. 식음료</td><td>120명 전 식사</td><td>5,000,000</td></tr>
            <tr class="total"><td></td><td>총계 (예시)</td><td>~30,000,000</td></tr>
          </tbody>
        </table>
      </div>
    `
    },
    {
        label: "팀 소개",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 11</div>
        <h2 class="slide-title">행사 팀 소개</h2>
        <div class="org-grid">
          <div class="org-card lead"><div class="org-role">총괄/대표</div><div class="org-name">박준원</div></div>
          <div class="org-card"><div class="org-role">프로그램 PM</div><div class="org-name">TBD</div></div>
          <div class="org-card"><div class="org-role">파트너십/후원</div><div class="org-name">TBD</div></div>
          <div class="org-card"><div class="org-role">디자인/브랜딩</div><div class="org-name">TBD</div></div>
        </div>
      </div>
    `
    },
    {
        label: "운영 실적",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 12</div>
        <h2 class="slide-title">운영 실적 & 레퍼런스</h2>
        <div class="card-grid cols-3">
          <div class="card" style="border-top:3px solid var(--accent-1)"><div class="card-title">Past Event 01</div><div class="card-desc">일시: [YYYY.MM.DD]<br>성과: 완주 [__팀]</div></div>
          <div class="card" style="border-top:3px solid var(--accent-2)"><div class="card-title">Past Event 02</div><div class="card-desc">일시: [YYYY.MM.DD]<br>성과: 완주 [__팀]</div></div>
          <div class="card" style="border-top:3px solid var(--accent-4)"><div class="card-title">Past Event 03</div><div class="card-desc">일시: [YYYY.MM.DD]<br>성과: 완주 [__팀]</div></div>
        </div>
      </div>
    `
    },
    {
        label: "정산 & 리포팅",
        html: `
      <div class="slide-inner">
        <div class="slide-label">SECTION 13</div>
        <h2 class="slide-title">정산·리포팅</h2>
        <div class="two-cols">
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-2)">정산 원칙</h3>
            <ul class="checklist"><li>항목별 집행 사전 공유</li><li>14일 내 리포트 제출</li><li>영수증/증빙 제공</li></ul>
          </div>
          <div>
            <h3 style="font-size:1rem;margin-bottom:16px;color:var(--accent-4)">후원사 리포트</h3>
            <ul class="checklist"><li>행사 요약 / KPI</li><li>결과물 링크</li><li>노출 증빙 사진</li></ul>
          </div>
        </div>
      </div>
    `
    }
];

export default slidesData;
