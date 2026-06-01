/* ==========================================================================
   KICK-OPTIMIZER INTERACTIVE ENGINE (JAVASCRIPT)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==================== 1. PRODUCT DATABASE & MODELS ====================
    const CLEAT_DATABASE = [
        // ==================== PUMA ====================
        {
            id: "puma_ultra_match",
            name: "Puma Ultra Match+ AG",
            koreanSearchKey: "푸마 울트라 매치",
            brand: "puma",
            image: "assets/puma_ultra_match.png",
            bio: "스피드를 극대화하는 경량 아웃솔과 편안한 착화감의 Puma 대표 스피드 사일로.",
            tags: ["#극강의가벼움", "#인조잔디내구성상", "#뒤꿈치까짐주의"],
            nlpReview: "경량화에 초점을 맞춘 모델로, 스프린트 시 극강의 가속을 제공합니다. 다만 니트 핏이 타이트하여 첫 실착 시 뒤꿈치 까짐 현상이 보고되었으나, 인조잔디에서 뛰어난 내구성을 증명했습니다.",
            nlpScore: "89.4% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 129500, isLowest: true },
                { market: "Musinsa Sports", price: 134000, isLowest: false },
                { market: "Capo Store", price: 139000, isLowest: false }
            ],
            avgPrice: 134000,
            prefWidth: "normal",
            prefStyle: "speed",
            prefGround: "ag"
        },
        {
            id: "puma_future_match",
            name: "Puma Future Match FG/AG",
            koreanSearchKey: "푸마 퓨처 매치",
            brand: "puma",
            image: "assets/puma_future_match.png",
            bio: "네이마르가 착용하는 창의적인 플레이메이커를 위한 최강의 피팅 테크니컬 슈즈.",
            tags: ["#퓨전핏밴드", "#정교한드리블", "#볼컨트롤돌기"],
            nlpReview: "발등의 퓨전핏 플러스 밴드가 압박감을 분산시켜 환상적인 고정력을 체감케 합니다. 볼 그립력 또한 뛰어나 창의적인 패서들의 선호가 두드러집니다.",
            nlpScore: "91.2% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 135000, isLowest: true },
                { market: "Musinsa Sports", price: 139000, isLowest: false },
                { market: "Capo Store", price: 145000, isLowest: false }
            ],
            avgPrice: 139600,
            prefWidth: "wide",
            prefStyle: "control",
            prefGround: "fg"
        },
        {
            id: "puma_king_match",
            name: "Puma King Match HG",
            koreanSearchKey: "푸마 킹 매치",
            brand: "puma",
            image: "assets/puma_king_match.png",
            bio: "가죽 본연의 질감을 그대로 재현한 비동물성 신소재 K-Better 가죽의 마스터피스.",
            tags: ["#K-Better가죽", "#맨땅구장특화", "#클래식터치감"],
            nlpReview: "캥거루 가죽 수준의 부드러움을 선사하면서도 수분 흡수를 줄인 혁신 소재입니다. 맨땅(HG) 경기장에 최적화된 높은 스터드 내구성이 탁월합니다.",
            nlpScore: "93.0% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 109000, isLowest: true },
                { market: "Musinsa Sports", price: 114000, isLowest: false },
                { market: "Capo Store", price: 119000, isLowest: false }
            ],
            avgPrice: 114000,
            prefWidth: "normal",
            prefStyle: "physical",
            prefGround: "hg"
        },

        // ==================== NIKE ====================
        {
            id: "nike_mercurial_vapor",
            name: "Nike Zoom Mercurial Vapor 15 Academy AG",
            koreanSearchKey: "나이키 머큐리얼 베이퍼 15 아카데미",
            brand: "nike",
            image: "assets/nike_mercurial_vapor.png",
            bio: "에어 줌 유닛이 탑재되어 지면을 박차고 나가는 탄력성이 우수한 나이키 베스트셀러.",
            tags: ["#탄력적인에어줌", "#좁은발볼핏", "#날렵한스프린트"],
            nlpReview: "발을 단단하게 잡아주는 슬림 핏 설계로 좁은 발볼의 플레이어에게 최적입니다. 줌 에어의 반응성이 매우 뛰어나 스프린터들의 선호도가 대단히 높습니다.",
            nlpScore: "92.1% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 119000, isLowest: true },
                { market: "Musinsa Sports", price: 124000, isLowest: false },
                { market: "Capo Store", price: 129000, isLowest: false }
            ],
            avgPrice: 124000,
            prefWidth: "narrow",
            prefStyle: "speed",
            prefGround: "ag"
        },
        {
            id: "nike_phantom_gx",
            name: "Nike Phantom GX II Academy FG",
            koreanSearchKey: "나이키 팬텀 GX 아카데미",
            brand: "nike",
            image: "assets/nike_phantom_gx.png",
            bio: "볼 터치 영역을 극대화한 나이키스킨 탑재로 정밀한 슈팅과 패스를 지원하는 축구화.",
            tags: ["#나이키스킨", "#비대칭슈레이싱", "#텍스처볼그립"],
            nlpReview: "비대칭 슈레이싱 구조 덕분에 볼이 닿는 유효 면적이 늘어났습니다. 나이키스킨 특유의 마찰력이 발끝 감각을 예리하게 다듬어 정교한 킥을 가능하게 만듭니다.",
            nlpScore: "90.5% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 135000, isLowest: true },
                { market: "Musinsa Sports", price: 139000, isLowest: false },
                { market: "Capo Store", price: 145000, isLowest: false }
            ],
            avgPrice: 139600,
            prefWidth: "normal",
            prefStyle: "control",
            prefGround: "fg"
        },
        {
            id: "nike_tiempo_legend",
            name: "Nike Tiempo Legend 10 Academy HG",
            koreanSearchKey: "나이키 티엠포 레전드 10 아카데미",
            brand: "nike",
            image: "assets/nike_tiempo_legend.png",
            bio: "플라이터치 라이트 합성 가죽을 적용하여 부드러운 터치감을 영원히 구현한 클래식 사일로.",
            tags: ["#플라이터치가죽", "#편안한넓은핏", "#안정적스터드"],
            nlpReview: "기존 캥거루 가죽보다 얇고 가벼우면서도 복원력이 우수한 신형 합성 가죽입니다. 발볼이 여유 있게 설계되었고, 맨땅에서도 매우 단단한 접지력을 발휘합니다.",
            nlpScore: "94.0% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 139000, isLowest: true },
                { market: "Musinsa Sports", price: 144000, isLowest: false },
                { market: "Capo Store", price: 149000, isLowest: false }
            ],
            avgPrice: 144000,
            prefWidth: "wide",
            prefStyle: "physical",
            prefGround: "hg"
        },

        // ==================== ADIDAS ====================
        {
            id: "adidas_predator_accuracy",
            name: "Adidas Predator Accuracy.3 L AG",
            koreanSearchKey: "아디다스 프레데터 아큐러시",
            brand: "adidas",
            image: "assets/adidas_predator_accuracy.png",
            bio: "정교한 볼 그립을 제공하는 하이데피니션 그립 돌기가 특징인 파워 사일로.",
            tags: ["#돌기컨트롤", "#묵직한슈팅", "#넓은볼피팅"],
            nlpReview: "볼 궤적 컨트롤 and 강력한 슈팅에 특화된 돌기 디자인입니다. 토박스 공간이 비교적 여유로워 보통 이상의 발볼러들에게 뛰어난 착화감을 제공합니다.",
            nlpScore: "87.6% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 145000, isLowest: true },
                { market: "Musinsa Sports", price: 149000, isLowest: false },
                { market: "Capo Store", price: 155000, isLowest: false }
            ],
            avgPrice: 149600,
            prefWidth: "wide",
            prefStyle: "control",
            prefGround: "fg"
        },
        {
            id: "adidas_x_crazyfast",
            name: "Adidas X Crazyfast.3 FG",
            koreanSearchKey: "아디다스 X 크레이지패스트",
            brand: "adidas",
            image: "assets/adidas_x_crazyfast.png",
            bio: "바람을 뚫고 달리는 에어로레이어 초경량 어퍼 기술이 응축된 궁극의 스피드 부츠.",
            tags: ["#초경량에어로어퍼", "#밀착락다운핏", "#날카로운돌파력"],
            nlpReview: "스피드를 위해 모든 무게를 깎아낸 어퍼 구성이 일품입니다. 발목 칼라의 높은 탄성이 빈틈없는 밀착감을 만들어주어 스프린트 시 흔들림이 전혀 없습니다.",
            nlpScore: "89.8% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 129000, isLowest: true },
                { market: "Musinsa Sports", price: 134000, isLowest: false },
                { market: "Capo Store", price: 139000, isLowest: false }
            ],
            avgPrice: 134000,
            prefWidth: "narrow",
            prefStyle: "speed",
            prefGround: "fg"
        },
        {
            id: "adidas_copa_pure",
            name: "Adidas Copa Pure.2 HG",
            koreanSearchKey: "아디다스 코파 퓨어",
            brand: "adidas",
            image: "assets/adidas_copa_pure.png",
            bio: "송아지 가죽의 천연 감촉에 현대적인 디자인을 가미하여 완벽한 착화감을 주는 천연가죽 축구화.",
            tags: ["#소가죽어퍼", "#푹신한터치", "#맨땅내구성우수"],
            nlpReview: "발 앞부분에 최고급 소가죽이 사용되어 매우 부드럽고 푹신한 터치감을 줍니다. 발 모양에 맞춰 늘어나 착화감이 우수하며 맨땅용 스터드 내구도도 최강입니다.",
            nlpScore: "95.1% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 149000, isLowest: true },
                { market: "Musinsa Sports", price: 154000, isLowest: false },
                { market: "Capo Store", price: 159000, isLowest: false }
            ],
            avgPrice: 154000,
            prefWidth: "normal",
            prefStyle: "physical",
            prefGround: "hg"
        },

        // ==================== MIZUNO ====================
        {
            id: "mizuno_morelia_neo",
            name: "Mizuno Morelia Neo IV Pro AG",
            koreanSearchKey: "미즈노 모렐리아 네오 4 프로",
            brand: "mizuno",
            image: "assets/mizuno_morelia_neo.png",
            bio: "최상급 캥거루 가죽 터치감과 동양인 족형에 완벽히 맞춘 명작 축구화.",
            tags: ["#캥거루가죽", "#편안한와이드핏", "#클래식감성"],
            nlpReview: "발볼이 넓은 플레이어들의 절대적인 지지를 받는 모델입니다. 캥거루 가죽의 부드러움이 발 모양에 맞게 늘어나며, 천연잔디와 인조잔디 모두에서 안정적인 접지력을 선사합니다.",
            nlpScore: "96.5% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 168000, isLowest: true },
                { market: "Musinsa Sports", price: 172000, isLowest: false },
                { market: "Capo Store", price: 175000, isLowest: false }
            ],
            avgPrice: 171600,
            prefWidth: "wide",
            prefStyle: "physical",
            prefGround: "hg"
        },
        {
            id: "mizuno_alpha_pro",
            name: "Mizuno Alpha Pro FG",
            koreanSearchKey: "미즈노 알파 프로",
            brand: "mizuno",
            image: "assets/mizuno_alpha_pro.png",
            bio: "동양인 족형 설계 기반에 미즈노 역사상 가장 빠른 스프린트 스피드를 실현한 최경량 인조 가죽 모델.",
            tags: ["#미즈노최경량", "#초극강스프린트", "#인조어퍼피팅"],
            nlpReview: "단 190g 수준의 가벼움으로 폭발적인 속도감을 끌어냅니다. 얇은 스킨 어퍼가 인상적이며 슬림한 핏으로 좁은 발볼의 공격수에게 절정을 찍은 민첩성을 부여합니다.",
            nlpScore: "93.8% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 179000, isLowest: true },
                { market: "Musinsa Sports", price: 184000, isLowest: false },
                { market: "Capo Store", price: 189000, isLowest: false }
            ],
            avgPrice: 184000,
            prefWidth: "narrow",
            prefStyle: "speed",
            prefGround: "fg"
        },
        {
            id: "mizuno_monarcida",
            name: "Mizuno Monarcida Neo II Select AG",
            koreanSearchKey: "미즈노 모나르시다",
            brand: "mizuno",
            image: "assets/mizuno_monarcida.png",
            bio: "미즈노의 아이덴티티를 그대로 상속받은 입문 및 트레이닝용 극강 가성비의 와이드 볼 축구화.",
            tags: ["#가성비최고", "#3E와이드피팅", "#인조잔디내구성"],
            nlpReview: "발볼이 넓은 3E 와이드 규격으로 발이 매우 편합니다. 미즈노 특유의 박음질 패턴이 적용되어 발볼 퍼짐을 단단하게 지지하며 훈련 및 장시간 실착에 우수합니다.",
            nlpScore: "91.0% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 89000, isLowest: true },
                { market: "Musinsa Sports", price: 94000, isLowest: false },
                { market: "Capo Store", price: 99000, isLowest: false }
            ],
            avgPrice: 94000,
            prefWidth: "wide",
            prefStyle: "control",
            prefGround: "ag"
        },

        // ==================== NEW BALANCE ====================
        {
            id: "new_balance_furon",
            name: "New Balance Furon v7 Pro FG",
            koreanSearchKey: "뉴발란스 퓨론 v7",
            brand: "newbalance",
            image: "assets/new_balance_furon.png",
            bio: "폭발적인 가속과 날카로운 정밀 타격감을 제공하는 뉴발란스의 프리미엄 스피드 사일로.",
            tags: ["#초경량하이브리드", "#폭발적가속력", "#유연한니트핏"],
            nlpReview: "매우 가벼운 무게와 부드러운 하이포니트 발목 핏으로 큰 호평을 받고 있습니다. 아웃솔의 가속 반응성이 훌륭하며 스피드 지향 플레이어에게 극강의 만족감을 제공합니다.",
            nlpScore: "94.2% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 189000, isLowest: true },
                { market: "Musinsa Sports", price: 195000, isLowest: false },
                { market: "Capo Store", price: 199000, isLowest: false }
            ],
            avgPrice: 194300,
            prefWidth: "wide",
            prefStyle: "speed",
            prefGround: "fg"
        },
        {
            id: "new_balance_tekela",
            name: "New Balance Tekela v4 Magique AG",
            koreanSearchKey: "뉴발란스 테케라",
            brand: "newbalance",
            image: "assets/new_balance_tekela.png",
            bio: "끈 없는 디자인의 혁신적인 3D 텍스처 패널로 탁월한 컨트롤 감각을 제공하는 축구화.",
            tags: ["#끈없는축구화", "#3D텍스처컨트롤", "#인조잔디최적"],
            nlpReview: "끈이 없는 칼라 구조가 단단하게 발을 감싸 밀착감을 최고치로 높여줍니다. 발볼이 편안한 편이며 패스 시 볼의 미끄러짐을 최소화하는 고성능 터치 웨이브가 호평을 받습니다.",
            nlpScore: "89.2% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 139000, isLowest: true },
                { market: "Musinsa Sports", price: 145000, isLowest: false },
                { market: "Capo Store", price: 149000, isLowest: false }
            ],
            avgPrice: 144300,
            prefWidth: "wide",
            prefStyle: "control",
            prefGround: "ag"
        },
        {
            id: "new_balance_442",
            name: "New Balance 442 Team HG",
            koreanSearchKey: "뉴발란스 442",
            brand: "newbalance",
            image: "assets/new_balance_442.png",
            bio: "천연 캥거루 가죽의 클래식한 터치감과 경량 나일론 아웃솔이 조화를 이루는 고성능 헤리티지 사일로.",
            tags: ["#캥거루가죽어퍼", "#헤리티지디자인", "#동양인발볼특화"],
            nlpReview: "앞발등 전체에 천연 프리미엄 가죽이 적용되어 가죽 특유의 즉각적인 터치가 뛰어납니다. 2E 와이드 핏으로 발볼 압박이 없으며 뛰어난 주행 편안함을 체감케 합니다.",
            nlpScore: "95.6% (POSITIVE)",
            prices: [
                { market: "Naver Shopping", price: 129000, isLowest: true },
                { market: "Musinsa Sports", price: 134000, isLowest: false },
                { market: "Capo Store", price: 139000, isLowest: false }
            ],
            avgPrice: 134000,
            prefWidth: "normal",
            prefStyle: "physical",
            prefGround: "hg"
        }
    ];

    // ==================== 2. APPLICATION STATE ====================
    let userSelections = {
        width: "normal",
        style: "speed",
        ground: "ag",
        brand: "all",
        priceMin: 100000,
        priceMax: 200000
    };

    let activeCleatResult = null; // Currently matched cleat

    // ==================== 3. DOM ELEMENT REFERENCES ====================
    // Screens
    const pageInput = document.getElementById("page-input");
    const pageResult = document.getElementById("page-result");
    const pageWishlist = document.getElementById("page-wishlist");
    
    // Sliders & Custom Range Elements
    const widthProgress = document.getElementById("width-progress");
    const styleProgress = document.getElementById("style-progress");
    const groundProgress = document.getElementById("ground-progress");
    const brandProgress = document.getElementById("brand-progress");
    
    // Numeric Price range
    const inputPriceMin = document.getElementById("input-price-min");
    const inputPriceMax = document.getElementById("input-price-max");
    const priceWarning = document.getElementById("price-warning");
    
    // Action Buttons
    const btnNext = document.getElementById("btn-next");
    const btnReMatch = document.getElementById("btn-re-match");
    const btnSaveWishlist = document.getElementById("btn-save-wishlist");
    const btnSaveWishlistText = document.getElementById("btn-save-wishlist-text");
    const btnResultStar = document.getElementById("btn-result-star");
    const btnNavWishlist = document.getElementById("btn-nav-wishlist");
    const btnWishlistHome = document.getElementById("btn-wishlist-home");
    const btnEmptyStart = document.getElementById("btn-empty-start");
    const brandLogo = document.getElementById("brand-logo");
    
    // Matching Screen Dynamic Fields
    const resultMatchRate = document.getElementById("result-match-rate");
    const resultCleatImg = document.getElementById("result-cleat-img");
    const resultCleatName = document.getElementById("result-cleat-name");
    const resultCleatDesc = document.getElementById("result-cleat-desc");
    const resultCleatTags = document.getElementById("result-cleat-tags");
    const resultNlpReview = document.getElementById("result-nlp-review");
    const resultMarketplaceRows = document.getElementById("result-marketplace-rows");
    
    // Live Scraper elements
    const scraperLoader = document.getElementById("scraper-loader");
    const loaderBar = document.getElementById("loader-bar");
    const loaderLog = document.getElementById("loader-log");
    
    // Wishlist Container
    const wishlistGrid = document.getElementById("wishlist-grid");
    const wishlistEmptyView = document.getElementById("wishlist-empty-view");
    const wishlistCount = document.getElementById("wishlist-count");
    
    // System Clock Footer
    const footerTime = document.getElementById("footer-time");

    // ==================== 4. CORE ENGINE INITIALIZATION ====================
    updateSystemTime();
    setInterval(updateSystemTime, 1000);
    initializeWishlistBadge();

    // ==================== 5. INTERACTIVE SLIDER EVENTS ====================
    
    // Setup foot width nodes
    setupNodeSelector("widget-foot-width", "width", widthProgress, ["narrow", "normal", "wide"]);
    
    // Setup play style nodes
    setupNodeSelector("widget-play-style", "style", styleProgress, ["speed", "control", "physical"]);
    
    // Setup ground type nodes
    setupNodeSelector("widget-ground-type", "ground", groundProgress, ["fg", "ag", "hg"]);

    // Setup brand preference nodes
    setupNodeSelector("widget-brand-type", "brand", brandProgress, ["nike", "adidas", "newbalance", "mizuno", "puma", "all"]);

    function setupNodeSelector(widgetId, stateKey, progressBar, valuesArray) {
        const container = document.getElementById(widgetId);
        const nodeButtons = container.querySelectorAll(".node-btn");

        nodeButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                // Update active states
                nodeButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Update state value
                userSelections[stateKey] = btn.getAttribute("data-value") || valuesArray[index];

                // Calculate & animate progress line width
                const percentage = (index / (nodeButtons.length - 1)) * 100;
                progressBar.style.width = `${percentage}%`;
            });
        });
    }

    // ==================== 6. PRICE RANGE SPINNERS & VALIDATOR ====================
    
    // Min adjusters
    setupPriceAdjuster("btn-min-minus", "btn-min-plus", "input-price-min", "priceMin");
    // Max adjusters
    setupPriceAdjuster("btn-max-minus", "btn-max-plus", "input-price-max", "priceMax");

    function setupPriceAdjuster(minusId, plusId, inputId, stateKey) {
        const btnMinus = document.getElementById(minusId);
        const btnPlus = document.getElementById(plusId);
        const inputField = document.getElementById(inputId);

        btnMinus.addEventListener("click", () => {
            let val = parseInt(inputField.value) - 10000;
            const minBound = parseInt(inputField.getAttribute("min"));
            if (val >= minBound) {
                inputField.value = val;
                userSelections[stateKey] = val;
                validatePrices();
            }
        });

        btnPlus.addEventListener("click", () => {
            let val = parseInt(inputField.value) + 10000;
            const maxBound = parseInt(inputField.getAttribute("max"));
            if (val <= maxBound) {
                inputField.value = val;
                userSelections[stateKey] = val;
                validatePrices();
            }
        });

        inputField.addEventListener("input", () => {
            let val = parseInt(inputField.value) || 0;
            userSelections[stateKey] = val;
            validatePrices();
        });
    }

    function validatePrices() {
        const minVal = parseInt(inputPriceMin.value) || 0;
        const maxVal = parseInt(inputPriceMax.value) || 0;

        if (minVal > maxVal) {
            priceWarning.style.display = "block";
            btnNext.disabled = true;
            btnNext.style.opacity = "0.5";
            btnNext.style.cursor = "not-allowed";
        } else {
            priceWarning.style.display = "none";
            btnNext.disabled = false;
            btnNext.style.opacity = "1";
            btnNext.style.cursor = "pointer";
        }
    }

    // ==================== 7. DYNAMIC RECOMMENDATION ALGORITHM ====================
    
    function runCleatMatchingAlgorithm() {
        // 1. Filter database strictly by selected brand if not "all"
        let filteredDatabase = CLEAT_DATABASE;
        if (userSelections.brand !== "all") {
            filteredDatabase = CLEAT_DATABASE.filter(cleat => cleat.brand === userSelections.brand);
        }

        let scores = filteredDatabase.map(cleat => {
            let score = 0;

            // 1. Width Fit Coefficient (40 pts max)
            if (userSelections.width === cleat.prefWidth) {
                score += 40;
            } else if (
                (userSelections.width === "normal" && (cleat.prefWidth === "narrow" || cleat.prefWidth === "wide")) ||
                (cleat.prefWidth === "wide" && userSelections.width === "normal")
            ) {
                score += 25; // partial fit
            } else {
                score += 10; // tight fit
            }

            // 2. Play Style Coefficient (40 pts max)
            if (userSelections.style === cleat.prefStyle) {
                score += 40;
            } else {
                score += 15;
            }

            // 3. Ground Stud Compatibility (20 pts max)
            if (userSelections.ground === cleat.prefGround) {
                score += 20;
            } else {
                score += 10;
            }

            // 4. Budget Range Alignment (10 pts bonus)
            if (cleat.avgPrice >= userSelections.priceMin && cleat.avgPrice <= userSelections.priceMax) {
                score += 10;
            } else if (cleat.avgPrice * 0.9 <= userSelections.priceMax && cleat.avgPrice * 1.1 >= userSelections.priceMin) {
                score += 5; // close to budget bounds
            }

            // Scale score (max 110) linearly to [88, 99] for display
            let basePercentage = Math.round(88 + (score / 110) * 11);
            if (basePercentage > 99) basePercentage = 99;
            if (basePercentage < 88) basePercentage = 88;

            return {
                cleat: cleat,
                score: score, // Keep raw score for sorting
                matchRate: basePercentage
            };
        });

        // Rank by highest raw score to guarantee correct sorting
        scores.sort((a, b) => b.score - a.score);
        return scores; // Return all sorted matching rates
    }

    // ==================== 8. LIVE WEB SCRAPER SIMULATION ====================
    
    function startScraperSequence(callback) {
        scraperLoader.classList.add("active");
        loaderBar.style.width = "0%";
        
        const logs = [
            { time: 100, text: "CONNECTING TO DISTRIBUTED WEB SCRAPING CLUSTERS..." },
            { time: 300, text: "REQUESTING LATEST NAVER SHOPPING PRODUCT SCHEMAS... OK" },
            { time: 550, text: "ACQUIRING MUSINSA SPORTS REAL-TIME API STOCKS... MATCH FOUND" },
            { time: 800, text: "PARSING CAPO STORE DETAILED PRICING MATRIX... SUCCESS (142ms)" },
            { time: 1050, text: "COMPILING NLP sentiment logs from 1,240 user reviews..." },
            { time: 1250, text: "COMPLETING KOREAN LEXICON SEMANTIC COEFFS... POSITIVE (89%)" },
            { time: 1400, text: "FINALIZING PREDICTION VECTORS & RENDERING GRAPHICS..." }
        ];

        logs.forEach(log => {
            setTimeout(() => {
                loaderLog.innerHTML = `[SYS] ${log.text}<br><span class="accent-text">> EXECUTION STATUS: NOMINAL</span>`;
                // Increment progress bar sequentially
                let percent = Math.round((log.time / 1400) * 100);
                loaderBar.style.width = `${percent}%`;
            }, log.time);
        });

        setTimeout(() => {
            scraperLoader.classList.remove("active");
            if (callback) callback();
        }, 1600);
    }

    function populateResultsScreen(matchData) {
        const cleat = matchData.cleat;
        activeCleatResult = cleat;

        // Set matching rate typography
        resultMatchRate.textContent = `${matchData.matchRate}%`;
        
        // Populate core labels
        resultCleatImg.src = cleat.image;
        resultCleatImg.alt = cleat.name;
        resultCleatName.textContent = cleat.name;
        resultCleatDesc.textContent = cleat.bio;

        // Populate AI Summary Tags
        resultCleatTags.innerHTML = "";
        cleat.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "ai-tag";
            span.textContent = tag;
            resultCleatTags.appendChild(span);
        });

        // Set NLP review blocks
        resultNlpReview.textContent = cleat.nlpReview;
        const nlpBadge = pageResult.querySelector(".nlp-badge");
        if (nlpBadge) {
            nlpBadge.innerHTML = `SENTIMENT ANALYSIS: <span class="accent-text">${cleat.nlpScore}</span>`;
        }

        // Set live scraped price table
        resultMarketplaceRows.innerHTML = "";
        cleat.prices.forEach(priceObj => {
            const tr = document.createElement("tr");
            tr.className = "clickable-price-row";

            // Build purchase search query URL dynamically using optimized search keys tailored per platform
            let query = "";
            
            // Define silo names and brand prefixes for optimized searching
            let brandPrefix = "";
            if (cleat.brand === "nike") brandPrefix = "나이키";
            else if (cleat.brand === "adidas") brandPrefix = "아디다스";
            else if (cleat.brand === "puma") brandPrefix = "푸마";
            else if (cleat.brand === "mizuno") brandPrefix = "미즈노";
            else if (cleat.brand === "newbalance") brandPrefix = "뉴발란스";

            let siloName = "";
            if (cleat.id.includes("mercurial")) siloName = "머큐리얼";
            else if (cleat.id.includes("phantom")) siloName = "팬텀";
            else if (cleat.id.includes("tiempo")) siloName = "티엠포";
            else if (cleat.id.includes("predator")) siloName = "프레데터";
            else if (cleat.id.includes("crazyfast")) siloName = "크레이지패스트";
            else if (cleat.id.includes("copa")) siloName = "코파";
            else if (cleat.id.includes("ultra")) siloName = "울트라";
            else if (cleat.id.includes("future")) siloName = "퓨처";
            else if (cleat.id.includes("king")) siloName = "킹";
            else if (cleat.id.includes("morelia")) siloName = "모렐리아";
            else if (cleat.id.includes("alpha")) siloName = "알파";
            else if (cleat.id.includes("monarcida")) siloName = "모나르시다";
            else if (cleat.id.includes("furon")) siloName = "퓨론";
            else if (cleat.id.includes("tekela")) siloName = "테케라";
            else if (cleat.id.includes("442")) siloName = "442";

            let marketDisplayName = priceObj.market;
            let purchaseUrl = "";

            if (priceObj.market === "Naver Shopping") {
                marketDisplayName = "Naver Shopping";
                query = encodeURIComponent(cleat.koreanSearchKey || cleat.name);
                purchaseUrl = `https://search.shopping.naver.com/search/all?query=${query}`;
            } else if (priceObj.market === "Musinsa Sports") {
                // Map to Crazy 11 (Korea's #1 specialized soccer mall)
                marketDisplayName = "Crazy 11";
                // Brand + Silo search query (e.g. '나이키 머큐리얼') guarantees exact brand cleats on Crazy 11
                query = encodeURIComponent(`${brandPrefix} ${siloName}`);
                purchaseUrl = `https://www.crazy11.co.kr/shop/shopbrand.html?search=${query}`;
            } else {
                // Map to Kream (Premium footwear/cleats marketplace)
                marketDisplayName = "Kream";
                // Brand + Silo search query works perfectly on Kream
                query = encodeURIComponent(`${brandPrefix} ${siloName}`);
                purchaseUrl = `https://kream.co.kr/search?keyword=${query}`;
            }

            tr.title = `${marketDisplayName}에서 ${cleat.name} 최저가 확인하기`;

            tr.addEventListener("click", () => {
                window.open(purchaseUrl, "_blank");
            });
            
            const tdMarket = document.createElement("td");
            tdMarket.innerHTML = `<span class="market-link-text">${marketDisplayName} <span class="accent-text">↗</span></span>`;
            
            const tdPrice = document.createElement("td");
            tdPrice.className = "text-right price-highlight";
            tdPrice.textContent = `₩${priceObj.price.toLocaleString()}`;
            
            const tdStatus = document.createElement("td");
            tdStatus.className = "text-right";
            
            const spanStatus = document.createElement("span");
            if (priceObj.isLowest) {
                spanStatus.className = "price-status green";
                spanStatus.textContent = "최저가";
            } else {
                spanStatus.className = "price-status";
                spanStatus.textContent = "판매중";
            }
            
            tdStatus.appendChild(spanStatus);
            tr.appendChild(tdMarket);
            tr.appendChild(tdPrice);
            tr.appendChild(tdStatus);
            resultMarketplaceRows.appendChild(tr);
        });

        // Update wishlist star state on Page 2
        updateWishlistStarButtonState();
    }

    // ==================== 9. SCREEN TRANSITIONS ====================
    
    function navigateToSection(targetSection) {
        // Fade out all sections
        const sections = [pageInput, pageResult, pageWishlist];
        sections.forEach(sec => {
            sec.classList.remove("active");
        });
        
        // Render target active
        setTimeout(() => {
            targetSection.classList.add("active");
        }, 150);
    }

    // Render Matched Recommendations tabs
    function renderRecommendationsTabs(rankedMatches) {
        const container = document.getElementById("result-tabs-container");
        container.innerHTML = "";

        // Display top 3 matches
        const topMatches = rankedMatches.slice(0, 3);
        const rankLabels = ["1st Match", "2nd Match", "3rd Match"];

        topMatches.forEach((match, index) => {
            const btn = document.createElement("button");
            btn.className = `recommendation-tab-btn ${index === 0 ? 'active' : ''}`;
            
            // Clean names for neat representation in tab buttons
            let cleanName = match.cleat.name;
            cleanName = cleanName.replace(" AG", "").replace(" Academy", "").replace(" Zoom", "");
            if (cleanName.length > 22) cleanName = cleanName.substring(0, 20) + "..";

            btn.innerHTML = `
                <span class="tab-rank">${rankLabels[index]}</span>
                <span class="tab-name">${cleanName}</span>
                <span class="tab-rate accent-text font-orbitron">${match.matchRate}%</span>
            `;

            btn.addEventListener("click", () => {
                // Set active states
                container.querySelectorAll(".recommendation-tab-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Dynamic populate results
                populateResultsScreen(match);
            });

            container.appendChild(btn);
        });
    }

    btnNext.addEventListener("click", () => {
        // Run matching logic first returning ranked matching list
        const rankedMatches = runCleatMatchingAlgorithm();
        
        // Navigate to the result screen first so the full-screen loader shows up
        navigateToSection(pageResult);
        
        // Show scraper live loader animation
        startScraperSequence(() => {
            // Once scraper completes, render top 3 matched tabs and populate details
            renderRecommendationsTabs(rankedMatches);
            populateResultsScreen(rankedMatches[0]);
        });
    });

    btnReMatch.addEventListener("click", () => {
        navigateToSection(pageInput);
    });

    btnNavWishlist.addEventListener("click", () => {
        renderWishlistPage();
        navigateToSection(pageWishlist);
    });

    btnWishlistHome.addEventListener("click", () => {
        navigateToSection(pageInput);
    });

    btnEmptyStart.addEventListener("click", () => {
        navigateToSection(pageInput);
    });

    brandLogo.addEventListener("click", () => {
        navigateToSection(pageInput);
    });


    // ==================== 10. WISHLIST MANAGEMENT (LOCAL STORAGE) ====================
    
    function getWishlist() {
        const data = localStorage.getItem("kick_optimizer_wishlist");
        return data ? JSON.parse(data) : [];
    }

    function saveWishlist(wishlist) {
        localStorage.setItem("kick_optimizer_wishlist", JSON.stringify(wishlist));
        updateWishlistCountBadge();
    }

    function toggleWishlist(cleat) {
        let wishlist = getWishlist();
        const index = wishlist.findIndex(item => item.id === cleat.id);
        
        if (index > -1) {
            // Item exists, remove it
            wishlist.splice(index, 1);
            saveWishlist(wishlist);
            return false; // Removed
        } else {
            // Item does not exist, add it
            wishlist.push({
                id: cleat.id,
                name: cleat.name,
                image: cleat.image,
                bio: cleat.bio,
                price: cleat.prices.find(p => p.isLowest).price
            });
            saveWishlist(wishlist);
            return true; // Added
        }
    }

    function isWishlisted(cleatId) {
        let wishlist = getWishlist();
        return wishlist.some(item => item.id === cleatId);
    }

    // Update wishlist star state on Page 2
    function updateWishlistStarButtonState() {
        if (!activeCleatResult) return;
        
        const inWishlist = isWishlisted(activeCleatResult.id);
        if (inWishlist) {
            btnResultStar.classList.add("active");
            btnSaveWishlist.classList.add("secondary-outline-btn");
            btnSaveWishlist.classList.remove("primary-neon-btn");
            btnSaveWishlistText.textContent = "보관함에서 삭제";
        } else {
            btnResultStar.classList.remove("active");
            btnSaveWishlist.classList.remove("secondary-outline-btn");
            btnSaveWishlist.classList.add("primary-neon-btn");
            btnSaveWishlistText.textContent = "위시리스트 보관";
        }
    }

    btnResultStar.addEventListener("click", () => {
        if (!activeCleatResult) return;
        
        const added = toggleWishlist(activeCleatResult);
        updateWishlistStarButtonState();
        triggerFloatingNotification(added ? "보관함에 저장되었습니다." : "보관함에서 삭제되었습니다.");
    });

    btnSaveWishlist.addEventListener("click", () => {
        if (!activeCleatResult) return;
        
        const added = toggleWishlist(activeCleatResult);
        updateWishlistStarButtonState();
        triggerFloatingNotification(added ? "보관함에 저장되었습니다." : "보관함에서 삭제되었습니다.");
    });

    function initializeWishlistBadge() {
        updateWishlistCountBadge();
    }

    function updateWishlistCountBadge() {
        const count = getWishlist().length;
        wishlistCount.textContent = count;
    }

    // Render Saved Wishlist Page
    function renderWishlistPage() {
        // Clear old list items except empty view
        const oldCards = wishlistGrid.querySelectorAll(".wishlist-card");
        oldCards.forEach(c => c.remove());

        const wishlist = getWishlist();

        if (wishlist.length === 0) {
            wishlistEmptyView.style.display = "flex";
        } else {
            wishlistEmptyView.style.display = "none";
            
            wishlist.forEach(item => {
                const card = document.createElement("div");
                card.className = "wishlist-card";
                card.id = `wish-card-${item.id}`;

                // Image thumbnail
                const img = document.createElement("img");
                img.className = "wishlist-card-thumbnail";
                img.src = item.image;
                img.alt = item.name;

                // Detail stack
                const details = document.createElement("div");
                details.className = "wishlist-card-details";

                const title = document.createElement("h3");
                title.className = "wishlist-card-title";
                title.textContent = item.name;

                const bio = document.createElement("p");
                bio.className = "wishlist-card-bio";
                bio.textContent = item.bio;

                const price = document.createElement("p");
                price.className = "wishlist-card-price";
                price.textContent = `최저 ₩${item.price.toLocaleString()}`;

                details.appendChild(title);
                details.appendChild(bio);
                details.appendChild(price);

                // Active glowing yellow star to delete
                const deleteStarBtn = document.createElement("button");
                deleteStarBtn.className = "card-star-btn";
                deleteStarBtn.innerHTML = "★";
                deleteStarBtn.ariaLabel = "Remove from Wishlist";

                deleteStarBtn.addEventListener("click", () => {
                    // Slide out card smoothly
                    card.classList.add("fade-out");
                    
                    setTimeout(() => {
                        // Remove from Local Storage and DOM
                        let currentWishlist = getWishlist();
                        const newWishlist = currentWishlist.filter(w => w.id !== item.id);
                        saveWishlist(newWishlist);
                        card.remove();
                        
                        // Check if empty now
                        if (getWishlist().length === 0) {
                            wishlistEmptyView.style.display = "flex";
                        }
                    }, 300); // matches fade-out duration
                });

                card.appendChild(img);
                card.appendChild(details);
                card.appendChild(deleteStarBtn);
                
                wishlistGrid.appendChild(card);
            });
        }
    }

    // Dynamic toast alerts for high fidelity UX
    function triggerFloatingNotification(message) {
        // Remove existing notification if present
        const oldNotify = document.querySelector(".cyber-notification");
        if (oldNotify) oldNotify.remove();

        const notification = document.createElement("div");
        notification.className = "cyber-notification font-orbitron";
        notification.innerHTML = `<span class="accent-text">// ALERT:</span> ${message}`;
        document.body.appendChild(notification);

        // Styling injection in case
        notification.style.position = "fixed";
        notification.style.bottom = "80px";
        notification.style.right = "30px";
        notification.style.background = "rgba(18, 18, 18, 0.95)";
        notification.style.border = "1px solid var(--accent-color)";
        notification.style.boxShadow = "0 0 15px var(--accent-glow)";
        notification.style.padding = "14px 24px";
        notification.style.borderRadius = "4px";
        notification.style.zIndex = "1000";
        notification.style.fontSize = "0.85rem";
        notification.style.color = "#FFF";
        notification.style.letterSpacing = "0.5px";
        notification.style.opacity = "0";
        notification.style.transform = "translateY(20px)";
        notification.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";

        // Trigger animation
        setTimeout(() => {
            notification.style.opacity = "1";
            notification.style.transform = "translateY(0)";
        }, 50);

        // Slide out after 2.5 seconds
        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transform = "translateY(15px)";
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2500);
    }

    // ==================== 11. HELPER: LIVE SYSTEM CLOCK ====================
    
    function updateSystemTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        footerTime.textContent = `SYS_TIME: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

});
