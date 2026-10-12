const EVENT_TREATMENTS = [
  {
    nameKo: "써마쿨 FLX 900샷 + 아이써마쿨 225샷",
    nameJa: "サーマクールFLX 900ショット + アイサーマクール225ショット",
    price: 3640000,
    concerns: ["lifting"],
    descriptionKo: "얼굴과 눈가 탄력·리프팅 관리에 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "顔まわりと目元のハリ・リフトアップが気になる方におすすめの組み合わせです。"
  },
  {
    nameKo: "써마쿨 FLX 600샷 + 아이써마쿨 450샷",
    nameJa: "サーマクールFLX 600ショット + アイサーマクール450ショット",
    price: 3630000,
    concerns: ["lifting"],
    descriptionKo: "얼굴과 눈가 탄력·리프팅 관리에 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "顔まわりと目元のハリ・リフトアップが気になる方におすすめの組み合わせです。"
  },
  {
    nameKo: "써마쿨 FLX 600샷 + 소프웨이브 100샷 + 리쥬란 HB 4cc",
    nameJa: "サーマクールFLX 600ショット + ソフウェーブ100ショット + リジュランHB 4cc",
    price: 3400000,
    concerns: ["lifting", "glow"],
    descriptionKo: "탄력 관리와 촉촉한 피부 표현을 함께 고려할 때 볼 수 있는 조합이에요.",
    descriptionJa: "ハリのケアとみずみずしい肌印象を一緒に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "써마쿨 600샷 + 소프웨이브 200샷",
    nameJa: "サーマクール600ショット + ソフウェーブ200ショット",
    price: 3640000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 리프팅 관리에 집중하고 싶을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリ・リフトアップのケアを中心に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 올리지오 600샷",
    nameJa: "ウルセラピープライム400ショット + オリジオ600ショット",
    price: 1890000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 얼굴 라인 관리에 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリやフェイスラインのケアが気になる方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 온다 80,000J",
    nameJa: "ウルセラピープライム400ショット + オンダ80,000J",
    price: 1920000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 얼굴 라인 관리에 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリやフェイスラインのケアが気になる方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 소프웨이브 100펄스",
    nameJa: "ウルセラピープライム400ショット + ソフウェーブ100パルス",
    price: 2170000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 리프팅 관리에 집중하고 싶을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリ・リフトアップのケアを中心に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 아이써마쿨 225샷",
    nameJa: "ウルセラピープライム400ショット + アイサーマクール225ショット",
    price: 2330000,
    concerns: ["lifting"],
    descriptionKo: "얼굴과 눈가 탄력·리프팅 관리에 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "顔まわりと目元のハリ・リフトアップが気になる方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 써마쿨 FLX 600샷",
    nameJa: "ウルセラピープライム400ショット + サーマクールFLX600ショット",
    price: 3270000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 리프팅 관리에 집중하고 싶을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリ・リフトアップのケアを中心に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 500샷 + 써마쿨 FLX 600샷",
    nameJa: "ウルセラピープライム500ショット + サーマクールFLX600ショット",
    price: 3600000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 리프팅 관리에 집중하고 싶을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリ・リフトアップのケアを中心に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 600샷 + 써마쿨 FLX 600샷",
    nameJa: "ウルセラピープライム600ショット + サーマクールFLX600ショット",
    price: 3930000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 리프팅 관리에 집중하고 싶을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリ・リフトアップのケアを中心に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 100샷",
    nameJa: "ウルセラピープライム 100ショット",
    price: 390000,
    concerns: ["lifting"],
    descriptionKo: "탄력·리프팅 관리에 관심 있는 분이 살펴볼 수 있는 이벤트예요.",
    descriptionJa: "ハリ・リフトアップのケアが気になる方が検討できるイベントです。"
  },
  {
    nameKo: "울쎄라피 프라임 300샷",
    nameJa: "ウルセラピープライム 300ショット",
    price: 1170000,
    concerns: ["lifting"],
    descriptionKo: "탄력과 얼굴 라인 관리에 관심 있을 때 고려할 수 있는 이벤트예요.",
    descriptionJa: "ハリやフェイスラインのケアが気になる方が検討できるイベントです。"
  },
  {
    nameKo: "울쎄라피 프라임 300샷 + 리투오 6cc + 인젝터",
    nameJa: "ウルセラピープライム300ショット + リトゥオ6cc + インジェクター",
    price: 1510000,
    concerns: ["lifting", "glow"],
    descriptionKo: "탄력 관리와 피부 컨디션 케어를 함께 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリのケアと肌コンディションのケアを一緒に考えられる組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 300샷 + 쥬베룩 1병 + LDM",
    nameJa: "ウルセラピープライム300ショット + ジュベルック1本 + LDM",
    price: 1500000,
    concerns: ["lifting", "texture"],
    descriptionKo: "탄력과 피부결 관리에 함께 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリと肌キメのケアを一緒に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 300샷 + 리쥬란 힐러 6cc + LDM",
    nameJa: "ウルセラピープライム300ショット + リジュランヒーラー6cc + LDM",
    price: 1580000,
    concerns: ["lifting", "texture", "glow"],
    descriptionKo: "탄력과 피부결·광채 관리에 함께 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリと肌キメ・ツヤのケアを一緒に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "울쎄라피 프라임 400샷 + 쥬베룩 볼륨 2부위 + LDM",
    nameJa: "ウルセラピープライム400ショット + ジュベルックボリューム2部位 + LDM",
    price: 1780000,
    concerns: ["lifting", "texture"],
    descriptionKo: "탄력과 피부결 관리에 함께 관심 있을 때 고려할 수 있는 조합이에요.",
    descriptionJa: "ハリと肌キメのケアを一緒に考えたい方におすすめの組み合わせです。"
  },
  {
    nameKo: "리쥬란 힐러 2cc",
    nameJa: "リジュランヒーラー 2cc",
    price: 161000,
    concerns: ["texture", "glow"],
    descriptionKo: "피부결과 촉촉한 피부 표현에 관심 있을 때 살펴볼 수 있는 이벤트예요.",
    descriptionJa: "肌キメやみずみずしい肌印象が気になる方が検討できるイベントです。"
  },
  {
    nameKo: "리투오 1병 (6cc)",
    nameJa: "リトゥオ 1本（6cc）",
    price: 350000,
    concerns: ["glow", "texture"],
    descriptionKo: "수분감과 피부 컨디션 관리에 관심 있을 때 살펴볼 수 있는 이벤트예요.",
    descriptionJa: "うるおい感や肌コンディションのケアが気になる方が検討できるイベントです。"
  }
];

const TEXT = {
  ko: {
    welcome: "WELCOME TO BEAUTY ROULETTE",
    concernTitle: "오늘의 피부 시술 룰렛을<br>돌려볼까요? ✨",
    concernGuide: "먼저 가장 신경 쓰이는 피부 고민을<br>최대 2개 골라 주세요.",
    selection: (count) => `${count} / 2 선택됨`,
    next: "다음으로",
    previous: "이전",
    budgetStep: "STEP 2",
    budgetTitle: "예상 예산을 골라 주세요",
    budgetGuide: "1인당 시술 예산 기준이에요.",
    spin: "룰렛 돌리기",
    resultEyebrow: "ROULETTE RESULT",
    resultTitle: "룰렛 결과",
    loading: "룰렛을 돌리는 중이에요...",
    again: "다시 돌리기",
    footer: "나에게 맞는 뷰티 이벤트를 가볍게 찾아보세요",
    nearby: "선택한 예산에 정확히 맞는 시술이 없어 가장 가까운 가격대의 이벤트예요.",
    concerns: [
      { id: "tone", icon: "✨", label: "피부 톤·색소" },
      { id: "texture", icon: "🫧", label: "모공·피부결" },
      { id: "lifting", icon: "💗", label: "탄력·리프팅" },
      { id: "acne", icon: "🌿", label: "여드름·진정" },
      { id: "glow", icon: "💧", label: "수분·광채" },
      { id: "unknown", icon: "🎀", label: "잘 모르겠어요" }
    ],
    budgets: [
      { id: "under300", label: "30만 원 미만", min: 0, max: 299999 },
      { id: "300to500", label: "30만 원 이상 ~ 50만 원 미만", min: 300000, max: 499999 },
      { id: "500to1000", label: "50만 원 이상 ~ 100만 원 미만", min: 500000, max: 999999 },
      { id: "1000to2000", label: "100만 원 이상 ~ 200만 원 미만", min: 1000000, max: 1999999 },
      { id: "over2000", label: "200만 원 이상", min: 2000000, max: Infinity },
      { id: "check", label: "비용을 확인한 후 결정", min: 0, max: Infinity }
    ]
  },
  ja: {
    welcome: "WELCOME TO BEAUTY ROULETTE",
    concernTitle: "今日の肌施術ルーレットを<br>回してみましょう✨",
    concernGuide: "まず、気になる肌悩みを<br>最大2つ選んでください。",
    selection: (count) => `${count} / 2 選択中`,
    next: "次へ",
    previous: "戻る",
    budgetStep: "STEP 2",
    budgetTitle: "予算を選んでください",
    budgetGuide: "お一人あたりの施術予算です。",
    spin: "ルーレットを回す",
    resultEyebrow: "ROULETTE RESULT",
    resultTitle: "ルーレット結果",
    loading: "ルーレットを回しています...",
    again: "もう一度回す",
    footer: "自分に合うビューティーイベントを気軽に見つけましょう",
    nearby: "選択した予算にぴったりの施術がないため、最も近い価格帯のイベントです。",
    concerns: [
      { id: "tone", icon: "✨", label: "肌トーン・色素" },
      { id: "texture", icon: "🫧", label: "毛穴・肌キメ" },
      { id: "lifting", icon: "💗", label: "ハリ・リフトアップ" },
      { id: "acne", icon: "🌿", label: "ニキビ・鎮静" },
      { id: "glow", icon: "💧", label: "保湿・ツヤ" },
      { id: "unknown", icon: "🎀", label: "よく分からない" }
    ],
    budgets: [
      { id: "under300", label: "₩300,000未満", min: 0, max: 299999 },
      { id: "300to500", label: "₩300,000以上 ～ ₩500,000未満", min: 300000, max: 499999 },
      { id: "500to1000", label: "₩500,000以上 ～ ₩1,000,000未満", min: 500000, max: 999999 },
      { id: "1000to2000", label: "₩1,000,000以上 ～ ₩2,000,000未満", min: 1000000, max: 1999999 },
      { id: "over2000", label: "₩2,000,000以上", min: 2000000, max: Infinity },
      { id: "check", label: "費用を確認してから決める", min: 0, max: Infinity }
    ]
  }
};

let language = "ko";
let selectedConcerns = [];
let selectedBudget = null;
let previousResult = "";

const concernList = document.getElementById("concernList");
const budgetList = document.getElementById("budgetList");
const nextButton = document.getElementById("nextButton");
const spinButton = document.getElementById("spinButton");
const resultContent = document.getElementById("resultContent");
const loadingText = document.getElementById("loadingText");
const priceNotice = document.getElementById("priceNotice");
const wheel = document.getElementById("wheel");

function getText() {
  return TEXT[language];
}

function formatPrice(price) {
  return `₩${price.toLocaleString("ko-KR")}`;
}

function renderConcerns() {
  const text = getText();

  concernList.innerHTML = text.concerns.map((concern) => `
    <button type="button" class="concern-option ${selectedConcerns.includes(concern.id) ? "selected" : ""}" data-concern="${concern.id}">
      <span class="option-icon">${concern.icon}</span>
      <span>${concern.label}</span>
    </button>
  `).join("");

  document.querySelectorAll(".concern-option").forEach((button) => {
    button.addEventListener("click", () => {
      const concern = button.dataset.concern;

      if (selectedConcerns.includes(concern)) {
        selectedConcerns = selectedConcerns.filter((item) => item !== concern);
      } else if (selectedConcerns.length < 2) {
        selectedConcerns.push(concern);
      }

      nextButton.disabled = selectedConcerns.length === 0;
      document.getElementById("selectionCount").textContent = text.selection(selectedConcerns.length);
      renderConcerns();
    });
  });
}

function renderBudgets() {
  const text = getText();

  budgetList.innerHTML = text.budgets.map((budget) => `
    <button type="button" class="budget-option ${selectedBudget?.id === budget.id ? "selected" : ""}" data-budget="${budget.id}">
      ${budget.label}
    </button>
  `).join("");

  document.querySelectorAll(".budget-option").forEach((button) => {
    button.addEventListener("click", () => {
      selectedBudget = text.budgets.find((budget) => budget.id === button.dataset.budget);
      spinButton.disabled = false;
      renderBudgets();
    });
  });
}

function updateLanguage() {
  const text = getText();

  document.documentElement.lang = language;
  document.getElementById("welcomeText").textContent = text.welcome;
  document.getElementById("concernTitle").innerHTML = text.concernTitle;
  document.getElementById("concernGuide").innerHTML = text.concernGuide;
  document.getElementById("selectionCount").textContent = text.selection(selectedConcerns.length);
  document.getElementById("nextButton").innerHTML = `${text.next} <span>→</span>`;
  document.getElementById("concernBackText").textContent = text.previous;
  document.getElementById("budgetBackText").textContent = text.previous;
  document.getElementById("budgetStepText").textContent = text.budgetStep;
  document.getElementById("budgetTitle").textContent = text.budgetTitle;
  document.getElementById("budgetGuide").textContent = text.budgetGuide;
  document.getElementById("spinButton").innerHTML = `${text.spin} <span>🎡</span>`;
  document.getElementById("resultEyebrow").textContent = text.resultEyebrow;
  document.getElementById("resultTitle").textContent = text.resultTitle;
  document.getElementById("loadingText").textContent = text.loading;
  document.getElementById("againButton").innerHTML = `${text.again} <span>↻</span>`;
  document.getElementById("footerText").textContent = text.footer;

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  renderConcerns();
  renderBudgets();
}

function showStep(id, progressStep) {
  document.querySelectorAll(".step").forEach((step) => {
    step.classList.toggle("active", step.id === id);
  });

  document.querySelectorAll(".progress-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index <= progressStep);
  });
}

function matchesConcern(treatment) {
  if (selectedConcerns.includes("unknown")) {
    return true;
  }

  const usableConcerns = selectedConcerns.filter((concern) => {
    return concern !== "tone" && concern !== "acne";
  });

  if (usableConcerns.length === 0) {
    return true;
  }

  return usableConcerns.every((concern) => treatment.concerns.includes(concern));
}

function getDistanceFromBudget(price, budget) {
  if (price < budget.min) {
    return budget.min - price;
  }

  if (price > budget.max) {
    return price - budget.max;
  }

  return 0;
}

function chooseTreatment() {
  let candidates = EVENT_TREATMENTS.filter(matchesConcern);

  if (candidates.length === 0) {
    candidates = EVENT_TREATMENTS.filter((treatment) => {
      return selectedConcerns.some((concern) => treatment.concerns.includes(concern));
    });
  }

  if (candidates.length === 0) {
    candidates = [...EVENT_TREATMENTS];
  }

  const exactBudgetCandidates = candidates.filter((treatment) => {
    return treatment.price >= selectedBudget.min && treatment.price <= selectedBudget.max;
  });

  let resultCandidates = [];
  let showNearbyNotice = false;

  if (exactBudgetCandidates.length > 0) {
    resultCandidates = exactBudgetCandidates;
  } else {
    const closestDistance = Math.min(
      ...candidates.map((treatment) => getDistanceFromBudget(treatment.price, selectedBudget))
    );

    resultCandidates = candidates.filter((treatment) => {
      return getDistanceFromBudget(treatment.price, selectedBudget) === closestDistance;
    });

    showNearbyNotice = selectedBudget.id !== "check";
  }

  if (selectedConcerns.includes("unknown") && exactBudgetCandidates.length > 0) {
    const lowestPrice = Math.min(...resultCandidates.map((treatment) => treatment.price));

    resultCandidates = resultCandidates.filter((treatment) => {
      return treatment.price === lowestPrice;
    });
  }

  const notPreviousCandidates = resultCandidates.filter((treatment) => {
    return treatment.nameKo !== previousResult;
  });

  if (notPreviousCandidates.length > 0) {
    resultCandidates = notPreviousCandidates;
  }

  const treatment = resultCandidates[
    Math.floor(Math.random() * resultCandidates.length)
  ];

  return { treatment, showNearbyNotice };
}

function showResult() {
  const text = getText();

  showStep("resultStep", 2);
  resultContent.classList.add("hidden");
  priceNotice.classList.add("hidden");
  loadingText.classList.remove("hidden");

  wheel.classList.remove("spinning");
  void wheel.offsetWidth;
  wheel.classList.add("spinning");

  setTimeout(() => {
    const { treatment, showNearbyNotice } = chooseTreatment();

    previousResult = treatment.nameKo;
    loadingText.classList.add("hidden");
    resultContent.classList.remove("hidden");

    document.getElementById("treatmentName").textContent =
      language === "ja" ? treatment.nameJa : treatment.nameKo;

    document.getElementById("treatmentPrice").textContent = formatPrice(treatment.price);

    document.getElementById("treatmentDescription").textContent =
      language === "ja" ? treatment.descriptionJa : treatment.descriptionKo;

    if (showNearbyNotice) {
      priceNotice.textContent = text.nearby;
      priceNotice.classList.remove("hidden");
    }
  }, 720);
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    updateLanguage();
  });
});

nextButton.addEventListener("click", () => {
  showStep("budgetStep", 1);
});

document.getElementById("concernBackButton").addEventListener("click", () => {
  showStep("concernStep", 0);
});

document.getElementById("budgetBackButton").addEventListener("click", () => {
  showStep("budgetStep", 1);
});

spinButton.addEventListener("click", showResult);
document.getElementById("againButton").addEventListener("click", showResult);

document.getElementById("homeButton").addEventListener("click", () => {
  selectedConcerns = [];
  selectedBudget = null;
  previousResult = "";
  nextButton.disabled = true;
  spinButton.disabled = true;

  updateLanguage();
  showStep("concernStep", 0);
});

updateLanguage();
showStep("concernStep", 0);