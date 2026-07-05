const translations = {
  en: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'About', research: 'Research', projects: 'Projects', software: 'Software', publications: 'Publications', contact: 'Contact' },
    about: {
      heading: 'About',
      bio1: 'I am an undergraduate researcher at Harbin Institute of Technology (HIT), majoring in Measurement & Control Technology and Instrumentation. My research focuses on flexible electronics and wearable sensors — I investigate low-dimensional nanomaterial behavior under mechanical deformation, device stability, and sensor structure optimization.',
      bio2: "Beyond flexible electronics, I have hands-on experience across the full hardware-software stack: embedded circuit design and PCB layout, Python-based GUI development for real-time system monitoring, SolidWorks 3D modeling, and Linux system operation. My two years leading the steering system for HIT's Formula Student driverless racing team taught me how to integrate sensors, actuators, embedded firmware, and control algorithms into reliable real-world systems."
    },
    research: {
      heading: 'Research Interests',
      items: [
        'Flexible electronics and low-dimensional nanomaterial-based sensors',
        'Wearable and self-sustained energy systems (harvesting, storage, power management)',
        'Flexible bioelectronics and bio-signal acquisition',
        'Electronic skin and tactile sensing for robotic perception',
        'Embedded system design, PCB layout, and sensor interface circuits',
        'Real-time monitoring GUI and upper-computer software development',
        'Closed-loop control systems and autonomous vehicle electronics',
        'AI-driven sensor data analysis and signal processing'
      ]
    },
    projects: {
      heading: 'Selected Projects',
      items: [
        { title: 'FSAE Driverless Steering System', desc: "Designed a dual-PID closed-loop steering system for HIT's Formula Student driverless racing car. Used SolidWorks for 3D modeling and assembly verification. Developed Python-based upper-computer software for real-time data visualization, parameter tuning, and status monitoring. Completed embedded firmware flashing and system integration on Ubuntu.", tags: ['PID Control', 'SolidWorks', 'Python GUI', 'Embedded', 'PCB Design'] },
        { title: 'RES Dual-Circuit Board System', desc: 'Designed a dual-circuit board solution for the RES (Race Emergency System), covering schematic design, PCB layout, fabrication verification, and hardware integration. Ensured reliable system operation under complex racing conditions.', tags: ['PCB Layout', 'Schematic Design', 'Hardware Testing', 'Automotive'] },
        { title: 'Flexible Electronics I-V Characterization', desc: 'Built I-V measurement circuits for flexible electronic devices to analyze electrical performance of low-dimensional nanomaterials under bending conditions. Used MATLAB/Python for data processing and analysis. Participated in sensor structure optimization to study material parameter effects on sensitivity and response time.', tags: ['Flexible Electronics', 'I-V Characterization', 'MATLAB', 'Python'] },
        { title: 'Solar Tracking Control System', desc: 'Developed an automatic solar tracking system based on 51 MCU as project leader. Completed circuit design, PCB layout, and system simulation verification. Achieved real-time sun-tracking control for photovoltaic panels.', tags: ['51 MCU', 'PCB Design', 'Control System', 'Photovoltaic'] },
        { title: 'Flexible Bioelectronics Review', desc: 'Contributed to a review paper on flexible bioelectronics at SIAT, surveying state-of-the-art wearable sensor technologies. Analyzed structural design, signal acquisition methods, and application scenarios of various bioelectronic devices. Participated in manuscript framework design and technical writing.', tags: ['Bioelectronics', 'Wearable Sensors', 'Literature Review', 'Review Paper'] },
        { title: 'Vehicle Electronics Integration', desc: 'Participated in full-vehicle electrical system integration and debugging for the FSAE driverless car, achieving multi-module cooperative control. Completed circuit design, functional verification, and ensured stable system operation under complex driving conditions.', tags: ['System Integration', 'Circuit Design', 'Multi-module Control', 'FSAE'] }
      ]
    },
    software: {
      heading: 'Software & Tools',
      items: [
        { title: 'Steering System Upper-Computer GUI', desc: 'Python-based GUI for real-time steering system data visualization, online parameter tuning, and status monitoring. Developed independently for the FSAE driverless racing car.' },
        { title: 'Sensor Data Processing & Analysis Toolkit', desc: 'MATLAB and Python scripts for I-V curve analysis, signal preprocessing, and experimental data visualization for flexible electronics characterization.' },
        { title: 'SolidWorks 3D Modeling & Assembly', desc: '3D part modeling, assembly verification, and engineering drawing generation for FSAE steering system and mechanical components.' },
        { title: 'PCB Design & Schematic Layout', desc: 'Complete PCB design workflow including schematic capture, layout, design rule checking, and fabrication file generation for automotive and embedded systems.' },
        { title: 'Embedded Firmware & System Configuration', desc: 'Embedded program flashing and Linux (Ubuntu) system configuration for embedded control modules, including toolchain setup and firmware deployment.' }
      ]
    },
    publications: {
      heading: 'Publications',
      empty: 'Selected manuscripts and publications will be updated here.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Co-author)'], journal: 'Wearable Electronics', year: 2026, note: 'Accepted, in press' },
        { title: 'A Hardware-Based Safety Loop Control and Fault Handling System (CN223955993U)', authors: ['L. Wang (First Author)'], journal: 'China Utility Model Patent (Granted)', year: 2025 },
        { title: 'Racing Car System Integration Box — Low Voltage (CN309876302S)', authors: ['L. Wang (First Author)'], journal: 'China Design Patent (Granted)', year: 2025 }
      ]
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'To be added'
    },
    footer: { copyright: 'Luyao Wang © 2026. All rights reserved.' }
  },

  'zh-CN': {
    brand: '王璐瑶',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: '简介', research: '研究', projects: '项目', software: '软件', publications: '论文', contact: '联系' },
    about: {
      heading: '个人简介',
      bio1: '我是一名哈尔滨工业大学（HIT）测控技术与仪器专业的本科生研究员。研究方向为柔性电子与可穿戴传感器，主要研究低维纳米材料在机械变形下的电学行为、器件稳定性以及传感器结构优化。',
      bio2: '在柔性电子之外，我具备全栈硬件-软件实践经验：嵌入式电路设计与PCB布局、基于Python的实时监控上位机软件开发、SolidWorks三维建模以及Linux系统操作。在HIT大学生无人驾驶方程式赛车队担任转向系统负责人的两年经历，让我学会了如何将传感器、执行器、嵌入式固件和控制算法集成到可靠的现实系统中。'
    },
    research: {
      heading: '研究方向',
      items: [
        '柔性电子与低维纳米材料传感器',
        '可穿戴自供能系统（能量采集、存储、电源管理）',
        '柔性生物电子与生物信号采集',
        '电子皮肤与机器人触觉感知',
        '嵌入式系统设计、PCB布局与传感器接口电路',
        '实时监控GUI与上位机软件开发',
        '闭环控制系统与自动驾驶车辆电子',
        'AI驱动的传感器数据分析与信号处理'
      ]
    },
    projects: {
      heading: '精选项目',
      items: [
        { title: 'FSAE无人驾驶转向系统', desc: '为HIT大学生方程式无人驾驶赛车设计了双PID闭环转向系统。使用SolidWorks完成三维建模与装配验证。独立开发基于Python的上位机软件，实现实时数据可视化、参数在线调试与状态监控。在Ubuntu系统上完成嵌入式程序烧录与系统集成。', tags: ['PID控制', 'SolidWorks', 'Python GUI', '嵌入式', 'PCB设计'] },
        { title: 'RES双电路板系统', desc: '为RES（赛车应急系统）设计双电路板方案，覆盖原理图绘制、PCB布局、制板验证与硬件联调全流程。确保系统在复杂赛车工况下稳定运行。', tags: ['PCB布局', '原理图设计', '硬件测试', '汽车电子'] },
        { title: '柔性电子器件I-V特性测试', desc: '搭建柔性电子器件I-V测量电路，分析低维纳米材料在弯曲条件下的电学性能。使用MATLAB/Python进行数据处理与分析。参与传感器结构优化，研究材料参数对灵敏度与响应时间的影响。', tags: ['柔性电子', 'I-V表征', 'MATLAB', 'Python'] },
        { title: '光伏寻日控制系统', desc: '作为项目组长，开发了基于51单片机的自动寻光控制系统。完成电路设计、PCB布局及系统仿真验证，实现光伏板实时跟踪控制。', tags: ['51单片机', 'PCB设计', '控制系统', '光伏'] },
        { title: '柔性生物电子综述', desc: '在深圳理工大学参与柔性生物电子综述论文撰写，调研最先进的可穿戴传感器技术。分析不同生物电子器件的结构设计、信号获取方法及应用场景。参与论文框架设计与技术写作。', tags: ['生物电子', '可穿戴传感器', '文献综述', '综述论文'] },
        { title: '整车电气系统集成', desc: '参与FSAE无人驾驶赛车整车电气系统集成与调试，实现多模块协同控制。完成电路设计与功能验证，确保系统在复杂行驶工况下稳定运行。', tags: ['系统集成', '电路设计', '多模块控制', 'FSAE'] }
      ]
    },
    software: {
      heading: '软件与工具',
      items: [
        { title: '转向系统上位机GUI', desc: '基于Python的实时转向系统数据可视化、在线参数调试与状态监控GUI，为FSAE无人驾驶赛车独立开发。' },
        { title: '传感器数据处理与分析工具', desc: 'MATLAB与Python脚本，用于柔性电子器件的I-V曲线分析、信号预处理和实验数据可视化。' },
        { title: 'SolidWorks三维建模与装配', desc: '为FSAE转向系统及机械部件完成三维零件建模、装配验证及工程图生成。' },
        { title: 'PCB设计与原理图绘制', desc: '完整的PCB设计工作流，包括原理图捕获、布局布线、设计规则检查及制造文件生成，适用于汽车电子与嵌入式系统。' },
        { title: '嵌入式固件与系统配置', desc: '嵌入式控制模块的程序烧录与Linux（Ubuntu）系统配置，包括工具链搭建与固件部署。' }
      ]
    },
    publications: {
      heading: '学术成果',
      empty: '论文与专利将在此更新。',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['（共同作者）'], journal: 'Wearable Electronics', year: 2026, note: '已录用，待刊' },
        { title: '一种基于硬件的安全回路控制与故障处理系统（CN223955993U）', authors: ['王璐瑶（第一发明人）'], journal: '中国实用新型专利（已授权）', year: 2025 },
        { title: '赛车系统集成盒（低压）（CN309876302S）', authors: ['王璐瑶（第一发明人）'], journal: '中国外观设计专利（已授权）', year: 2025 }
      ]
    },
    contact: {
      heading: '联系方式',
      emailLabel: '邮箱：',
      githubLabel: 'GitHub：',
      scholarLabel: 'Google Scholar：',
      linkedinLabel: 'LinkedIn：',
      toBeAdded: '待添加'
    },
    footer: { copyright: '王璐瑶 © 2026. 版权所有。' }
  },

  'zh-TW': {
    brand: '王璐瑤',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: '簡介', research: '研究', projects: '專案', software: '軟體', publications: '論文', contact: '聯繫' },
    about: {
      heading: '個人簡介',
      bio1: '我是哈爾濱工業大學（HIT）測控技術與儀器專業的本科生研究員。研究方向為柔性電子與可穿戴感測器，主要研究低維奈米材料在機械變形下的電學行為、元件穩定性以及感測器結構最佳化。',
      bio2: '在柔性電子之外，我具備全端硬體-軟體實踐經驗：嵌入式電路設計與PCB佈局、基於Python的即時監控上位機軟體開發、SolidWorks三維建模以及Linux系統操作。在HIT大學生無人駕駛方程式賽車隊擔任轉向系統負責人的兩年經歷，讓我學會了如何將感測器、致動器、嵌入式韌體和控制演算法整合到可靠的實際系統中。'
    },
    research: {
      heading: '研究方向',
      items: [
        '柔性電子與低維奈米材料感測器',
        '可穿戴自供能系統（能量擷取、儲存、電源管理）',
        '柔性生物電子與生物訊號擷取',
        '電子皮膚與機器人觸覺感知',
        '嵌入式系統設計、PCB佈局與感測器介面電路',
        '即時監控GUI與上位機軟體開發',
        '閉迴路控制系統與自動駕駛車輛電子',
        'AI驅動的感測器資料分析與訊號處理'
      ]
    },
    projects: {
      heading: '精選專案',
      items: [
        { title: 'FSAE無人駕駛轉向系統', desc: '為HIT大學生方程式無人駕駛賽車設計了雙PID閉迴路轉向系統。使用SolidWorks完成三維建模與裝配驗證。獨立開發基於Python的上位機軟體，實現即時資料視覺化、參數線上除錯與狀態監控。在Ubuntu系統上完成嵌入式程式燒錄與系統整合。', tags: ['PID控制', 'SolidWorks', 'Python GUI', '嵌入式', 'PCB設計'] },
        { title: 'RES雙電路板系統', desc: '為RES（賽車應急系統）設計雙電路板方案，涵蓋原理圖繪製、PCB佈局、製板驗證與硬體聯調全流程。確保系統在複雜賽車工況下穩定運作。', tags: ['PCB佈局', '原理圖設計', '硬體測試', '汽車電子'] },
        { title: '柔性電子元件I-V特性測試', desc: '搭建柔性電子元件I-V量測電路，分析低維奈米材料在彎曲條件下的電學效能。使用MATLAB/Python進行資料處理與分析。參與感測器結構最佳化，研究材料參數對靈敏度與響應時間的影響。', tags: ['柔性電子', 'I-V表徵', 'MATLAB', 'Python'] },
        { title: '光伏尋日控制系統', desc: '作為專案組長，開發了基於51單晶片的自動尋光控制系統。完成電路設計、PCB佈局及系統模擬驗證，實現光伏板即時追蹤控制。', tags: ['51單晶片', 'PCB設計', '控制系統', '光伏'] },
        { title: '柔性生物電子綜述', desc: '在深圳理工大學參與柔性生物電子綜述論文撰寫，調研最先進的可穿戴感測器技術。分析不同生物電子元件的結構設計、訊號擷取方法及應用場景。參與論文框架設計與技術寫作。', tags: ['生物電子', '可穿戴感測器', '文獻綜述', '綜述論文'] },
        { title: '整車電氣系統整合', desc: '參與FSAE無人駕駛賽車整車電氣系統整合與除錯，實現多模組協同控制。完成電路設計與功能驗證，確保系統在複雜行駛工況下穩定運作。', tags: ['系統整合', '電路設計', '多模組控制', 'FSAE'] }
      ]
    },
    software: {
      heading: '軟體與工具',
      items: [
        { title: '轉向系統上位機GUI', desc: '基於Python的即時轉向系統資料視覺化、線上參數除錯與狀態監控GUI，為FSAE無人駕駛賽車獨立開發。' },
        { title: '感測器資料處理與分析工具', desc: 'MATLAB與Python指令碼，用於柔性電子元件的I-V曲線分析、訊號預處理和實驗資料視覺化。' },
        { title: 'SolidWorks三維建模與裝配', desc: '為FSAE轉向系統及機械部件完成三維零件建模、裝配驗證及工程圖產生。' },
        { title: 'PCB設計與原理圖繪製', desc: '完整的PCB設計工作流程，包括原理圖擷取、佈局佈線、設計規則檢查及製造檔案產生，適用於汽車電子與嵌入式系統。' },
        { title: '嵌入式韌體與系統配置', desc: '嵌入式控制模組的程式燒錄與Linux（Ubuntu）系統配置，包括工具鏈搭建與韌體部署。' }
      ]
    },
    publications: {
      heading: '學術成果',
      empty: '論文與專利將在此更新。',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['（共同作者）'], journal: 'Wearable Electronics', year: 2026, note: '已錄用，待刊' },
        { title: '一種基於硬體的安全迴路控制與故障處理系統（CN223955993U）', authors: ['王璐瑤（第一發明人）'], journal: '中國實用新型專利（已授權）', year: 2025 },
        { title: '賽車系統整合盒（低壓）（CN309876302S）', authors: ['王璐瑤（第一發明人）'], journal: '中國外觀設計專利（已授權）', year: 2025 }
      ]
    },
    contact: {
      heading: '聯繫方式',
      emailLabel: '郵箱：',
      githubLabel: 'GitHub：',
      scholarLabel: 'Google Scholar：',
      linkedinLabel: 'LinkedIn：',
      toBeAdded: '待添加'
    },
    footer: { copyright: '王璐瑤 © 2026. 版權所有。' }
  },

  ja: {
    brand: '王璐瑤',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: '概要', research: '研究', projects: 'プロジェクト', software: 'ソフトウェア', publications: '論文', contact: '連絡先' },
    about: {
      heading: '概要',
      bio1: '私は哈爾濱工業大学（HIT）の計測制御技術・計器専攻の学部研究生です。研究分野はフレキシブルエレクトロニクスとウェアラブルセンサーで、低次元ナノ材料の機械的変形下での電気的挙動、デバイス安定性、センサー構造最適化を研究しています。',
      bio2: 'フレキシブルエレクトロニクスに加え、組み込み回路設計とPCBレイアウト、Pythonベースのリアルタイム監視GUI開発、SolidWorks 3Dモデリング、Linuxシステム運用など、ハードウェアからソフトウェアまでの実践経験があります。HITの学生フォーミュラ自動運転レーシングチームでステアリングシステム責任者を2年間務め、センサー、アクチュエータ、組み込みファームウェア、制御アルゴリズムを統合し信頼性の高い実システムを構築する方法を学びました。'
    },
    research: {
      heading: '研究分野',
      items: [
        'フレキシブルエレクトロニクスと低次元ナノ材料センサー',
        'ウェアラブル自立型エネルギーシステム（発電、蓄電、電源管理）',
        'フレキシブルバイオエレクトロニクスと生体信号取得',
        '電子皮膚とロボット触覚センシング',
        '組み込みシステム設計、PCBレイアウト、センサーインターフェース回路',
        'リアルタイム監視GUIと上位コンピュータソフトウェア開発',
        '閉ループ制御システムと自動運転車両電子機器',
        'AI駆動センサーデータ分析と信号処理'
      ]
    },
    projects: {
      heading: '主要プロジェクト',
      items: [
        { title: 'FSAE自動運転ステアリングシステム', desc: 'HIT学生フォーミュラ自動運転レーシングカー向けにデュアルPID閉ループステアリングシステムを設計。SolidWorksで3Dモデリングとアセンブリ検証を実施。Pythonベースの上位コンピュータソフトウェアを独自開発し、リアルタイムデータ可視化、パラメータオンライン調整、状態監視を実現。Ubuntu上で組み込みプログラムの書き込みとシステム統合を完了。', tags: ['PID制御', 'SolidWorks', 'Python GUI', '組み込み', 'PCB設計'] },
        { title: 'RESデュアル回路基板システム', desc: 'RES（レース緊急システム）用のデュアル回路基板ソリューションを設計。回路図設計、PCBレイアウト、製造検証、ハードウェア統合の全工程を担当。複雑なレース条件下での安定動作を確保。', tags: ['PCBレイアウト', '回路図設計', 'ハードウェアテスト', '車載電子'] },
        { title: 'フレキシブル電子デバイスI-V特性評価', desc: 'フレキシブル電子デバイスのI-V測定回路を構築し、曲げ条件下での低次元ナノ材料の電気的性能を解析。MATLAB/Pythonでデータ処理と分析を実施。センサー構造最適化に参加し、材料パラメータが感度と応答時間に与える影響を研究。', tags: ['フレキシブル電子', 'I-V特性評価', 'MATLAB', 'Python'] },
        { title: '太陽光追尾制御システム', desc: 'プロジェクトリーダーとして51MCUベースの自動太陽光追尾システムを開発。回路設計、PCBレイアウト、システムシミュレーション検証を完了し、太陽光パネルのリアルタイム追尾制御を実現。', tags: ['51 MCU', 'PCB設計', '制御システム', '太陽光発電'] },
        { title: 'フレキシブルバイオエレクトロニクスレビュー', desc: '深圳理工大学でフレキシブルバイオエレクトロニクスに関するレビュー論文の執筆に参加。最先端のウェアラブルセンサー技術を調査。様々なバイオ電子デバイスの構造設計、信号取得方法、応用シナリオを分析。論文のフレームワーク設計と技術執筆を担当。', tags: ['バイオエレクトロニクス', 'ウェアラブルセンサー', '文献レビュー', 'レビュー論文'] },
        { title: '車両電子システム統合', desc: 'FSAE自動運転車の車両全体の電気システム統合とデバッグに参加し、マルチモジュール協調制御を実現。回路設計と機能検証を完了し、複雑な走行条件下での安定動作を確保。', tags: ['システム統合', '回路設計', 'マルチモジュール制御', 'FSAE'] }
      ]
    },
    software: {
      heading: 'ソフトウェアとツール',
      items: [
        { title: 'ステアリングシステム上位GUI', desc: 'FSAE自動運転レーシングカー向けに独自開発したPythonベースのリアルタイムステアリングシステムデータ可視化、オンラインパラメータ調整、状態監視GUI。' },
        { title: 'センサーデータ処理・分析ツールキット', desc: 'フレキシブル電子デバイス特性評価のためのI-V曲線分析、信号前処理、実験データ可視化用のMATLABおよびPythonスクリプト。' },
        { title: 'SolidWorks 3Dモデリングとアセンブリ', desc: 'FSAEステアリングシステムおよび機械部品の3D部品モデリング、アセンブリ検証、設計図面作成。' },
        { title: 'PCB設計と回路図レイアウト', desc: '回路図キャプチャ、レイアウト、デザインルールチェック、製造ファイル生成を含む完全なPCB設計ワークフロー。車載および組み込みシステム向け。' },
        { title: '組み込みファームウェアとシステム設定', desc: '組み込み制御モジュールのプログラム書き込みとLinux（Ubuntu）システム設定。ツールチェーン構築とファームウェア展開を含む。' }
      ]
    },
    publications: {
      heading: '学術成果',
      empty: '論文と特許はこちらに更新されます。',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['（共著者）'], journal: 'Wearable Electronics', year: 2026, note: '採録済、掲載予定' },
        { title: 'ハードウェアベースの安全ループ制御および障害処理システム（CN223955993U）', authors: ['L. Wang（第一発明者）'], journal: '中国実用新案特許（登録済）', year: 2025 },
        { title: 'レーシングカーシステム統合ボックス — 低電圧（CN309876302S）', authors: ['L. Wang（第一発明者）'], journal: '中国意匠特許（登録済）', year: 2025 }
      ]
    },
    contact: {
      heading: '連絡先',
      emailLabel: 'メール：',
      githubLabel: 'GitHub：',
      scholarLabel: 'Google Scholar：',
      linkedinLabel: 'LinkedIn：',
      toBeAdded: '追加予定'
    },
    footer: { copyright: '王璐瑤 © 2026. All rights reserved.' }
  },

  ko: {
    brand: '王璐瑤',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: '소개', research: '연구', projects: '프로젝트', software: '소프트웨어', publications: '논문', contact: '연락처' },
    about: {
      heading: '소개',
      bio1: '저는 하얼빈공업대학(HIT) 계측제어기술·계측기 전공 학부 연구원입니다. 연구 분야는 유연전자소자와 웨어러블 센서로, 저차원 나노재료의 기계적 변형 하에서의 전기적 거동, 소자 안정성 및 센서 구조 최적화를 연구하고 있습니다.',
      bio2: '유연전자소자 외에도 임베디드 회로 설계 및 PCB 레이아웃, Python 기반 실시간 모니터링 GUI 개발, SolidWorks 3D 모델링, Linux 시스템 운영 등 하드웨어-소프트웨어 전반에 걸친 실무 경험을 보유하고 있습니다. HIT 학생 포뮬러 자율주행 레이싱 팀에서 2년간 스티어링 시스템 책임자를 맡으며 센서, 액추에이터, 임베디드 펌웨어, 제어 알고리즘을 신뢰성 있는 실제 시스템으로 통합하는 방법을 배웠습니다.'
    },
    research: {
      heading: '연구 관심 분야',
      items: [
        '유연전자소자와 저차원 나노재료 기반 센서',
        '웨어러블 자가발전 시스템 (에너지 수집, 저장, 전력 관리)',
        '유연 바이오전자소자와 생체 신호 수집',
        '전자 피부와 로봇 촉각 센싱',
        '임베디드 시스템 설계, PCB 레이아웃, 센서 인터페이스 회로',
        '실시간 모니터링 GUI와 상위 컴퓨터 소프트웨어 개발',
        '폐루프 제어 시스템과 자율주행 차량 전자장치',
        'AI 기반 센서 데이터 분석과 신호 처리'
      ]
    },
    projects: {
      heading: '주요 프로젝트',
      items: [
        { title: 'FSAE 자율주행 스티어링 시스템', desc: 'HIT 학생 포뮬러 자율주행 레이싱카를 위한 듀얼 PID 폐루프 스티어링 시스템 설계. SolidWorks로 3D 모델링 및 조립 검증 수행. Python 기반 상위 컴퓨터 소프트웨어를 독자 개발하여 실시간 데이터 시각화, 파라미터 온라인 튜닝, 상태 모니터링 구현. Ubuntu에서 임베디드 프로그램 플래싱 및 시스템 통합 완료.', tags: ['PID 제어', 'SolidWorks', 'Python GUI', '임베디드', 'PCB 설계'] },
        { title: 'RES 듀얼 회로 기판 시스템', desc: 'RES(레이스 비상 시스템)용 듀얼 회로 기판 솔루션 설계. 회로도 설계, PCB 레이아웃, 제작 검증, 하드웨어 통합의 전 과정 담당. 복잡한 레이스 조건에서 안정적인 시스템 작동 보장.', tags: ['PCB 레이아웃', '회로도 설계', '하드웨어 테스트', '차량 전자'] },
        { title: '유연전자소자 I-V 특성 평가', desc: '유연전자소자의 I-V 측정 회로를 구축하여 굽힘 조건에서 저차원 나노재료의 전기적 성능 분석. MATLAB/Python으로 데이터 처리 및 분석 수행. 재료 파라미터가 감도와 응답 시간에 미치는 영향을 연구하는 센서 구조 최적화에 참여.', tags: ['유연전자', 'I-V 특성', 'MATLAB', 'Python'] },
        { title: '태양광 추적 제어 시스템', desc: '프로젝트 리더로서 51 MCU 기반 자동 태양광 추적 시스템 개발. 회로 설계, PCB 레이아웃, 시스템 시뮬레이션 검증 완료. 태양광 패널의 실시간 추적 제어 달성.', tags: ['51 MCU', 'PCB 설계', '제어 시스템', '태양광'] },
        { title: '유연 바이오전자소자 리뷰', desc: '선전이공대학에서 유연 바이오전자소자 리뷰 논문 작성에 참여. 최신 웨어러블 센서 기술 조사. 다양한 바이오전자소자의 구조 설계, 신호 수집 방법, 응용 시나리오 분석. 논문 프레임워크 설계 및 기술 집필 담당.', tags: ['바이오전자', '웨어러블 센서', '문헌 리뷰', '리뷰 논문'] },
        { title: '차량 전자 시스템 통합', desc: 'FSAE 자율주행 차량의 전체 전기 시스템 통합 및 디버깅에 참여하여 다중 모듈 협조 제어 달성. 회로 설계 및 기능 검증 완료. 복잡한 주행 조건에서 안정적인 시스템 작동 보장.', tags: ['시스템 통합', '회로 설계', '다중 모듈 제어', 'FSAE'] }
      ]
    },
    software: {
      heading: '소프트웨어 및 도구',
      items: [
        { title: '스티어링 시스템 상위 GUI', desc: 'FSAE 자율주행 레이싱카를 위해 독자 개발한 Python 기반 실시간 스티어링 시스템 데이터 시각화, 온라인 파라미터 튜닝, 상태 모니터링 GUI.' },
        { title: '센서 데이터 처리 및 분석 도구', desc: '유연전자소자 특성 평가를 위한 I-V 곡선 분석, 신호 전처리, 실험 데이터 시각화용 MATLAB 및 Python 스크립트.' },
        { title: 'SolidWorks 3D 모델링 및 조립', desc: 'FSAE 스티어링 시스템 및 기계 부품의 3D 부품 모델링, 조립 검증, 엔지니어링 도면 생성.' },
        { title: 'PCB 설계 및 회로도 레이아웃', desc: '회로도 캡처, 레이아웃, 설계 규칙 검사, 제조 파일 생성을 포함한 완전한 PCB 설계 워크플로. 차량 및 임베디드 시스템용.' },
        { title: '임베디드 펌웨어 및 시스템 구성', desc: '임베디드 제어 모듈의 프로그램 플래싱 및 Linux(Ubuntu) 시스템 구성. 툴체인 설정 및 펌웨어 배포 포함.' }
      ]
    },
    publications: {
      heading: '학술 성과',
      empty: '논문과 특허가 여기에 업데이트됩니다.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(공동 저자)'], journal: 'Wearable Electronics', year: 2026, note: '게재 확정, 출판 예정' },
        { title: '하드웨어 기반 안전 루프 제어 및 고장 처리 시스템 (CN223955993U)', authors: ['L. Wang (제1 발명자)'], journal: '중국 실용신안 특허 (등록됨)', year: 2025 },
        { title: '레이싱카 시스템 통합 박스 — 저전압 (CN309876302S)', authors: ['L. Wang (제1 발명자)'], journal: '중국 디자인 특허 (등록됨)', year: 2025 }
      ]
    },
    contact: {
      heading: '연락처',
      emailLabel: '이메일:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: '추가 예정'
    },
    footer: { copyright: '王璐瑤 © 2026. All rights reserved.' }
  },

  fr: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'À propos', research: 'Recherche', projects: 'Projets', software: 'Logiciels', publications: 'Publications', contact: 'Contact' },
    about: {
      heading: 'À propos',
      bio1: "Je suis chercheuse en licence à l'Institut de Technologie de Harbin (HIT), spécialisée en Technologie de Mesure et Contrôle. Mes recherches portent sur l'électronique flexible et les capteurs portables — j'étudie le comportement électrique des nanomatériaux de basse dimension sous déformation mécanique, la stabilité des dispositifs et l'optimisation de la structure des capteurs.",
      bio2: "Au-delà de l'électronique flexible, j'ai une expérience pratique dans toute la chaîne matériel-logiciel : conception de circuits embarqués et PCB, développement d'interfaces graphiques Python pour la surveillance en temps réel, modélisation 3D avec SolidWorks et administration de systèmes Linux. Mes deux années à la tête du système de direction de l'écurie de course autonome Formula Student de HIT m'ont appris à intégrer capteurs, actionneurs, micrologiciels embarqués et algorithmes de contrôle dans des systèmes réels fiables."
    },
    research: {
      heading: 'Intérêts de recherche',
      items: [
        'Électronique flexible et capteurs à base de nanomatériaux de basse dimension',
        "Systèmes énergétiques auto-alimentés portables (récupération, stockage, gestion d'énergie)",
        "Bioélectronique flexible et acquisition de signaux biologiques",
        'Peau électronique et détection tactile pour la perception robotique',
        "Conception de systèmes embarqués, PCB et circuits d'interface de capteurs",
        "Interfaces graphiques de surveillance en temps réel et logiciels de contrôle",
        "Systèmes de contrôle en boucle fermée et électronique pour véhicules autonomes",
        "Analyse de données de capteurs par IA et traitement du signal"
      ]
    },
    projects: {
      heading: 'Projets sélectionnés',
      items: [
        { title: 'Système de direction autonome FSAE', desc: "Conception d'un système de direction à double PID pour la voiture de course autonome Formula Student de HIT. Modélisation 3D et vérification d'assemblage avec SolidWorks. Développement indépendant d'un logiciel de contrôle en Python pour la visualisation en temps réel, le réglage des paramètres et la surveillance d'état. Programmation embarquée et intégration système sous Ubuntu.", tags: ['Contrôle PID', 'SolidWorks', 'Python GUI', 'Embarqué', 'PCB'] },
        { title: 'Système de double carte RES', desc: "Conception d'une solution à double carte pour le RES (Système d'Urgence de Course), couvrant la conception de schémas, le layout PCB, la vérification de fabrication et l'intégration matérielle. Fonctionnement fiable garanti en conditions de course complexes.", tags: ['Layout PCB', 'Schéma', 'Test matériel', 'Automobile'] },
        { title: "Caractérisation I-V de dispositifs électroniques flexibles", desc: "Construction de circuits de mesure I-V pour analyser les performances électriques des nanomatériaux sous flexion. Traitement et analyse des données avec MATLAB/Python. Participation à l'optimisation de la structure des capteurs pour étudier l'impact des paramètres sur la sensibilité et le temps de réponse.", tags: ['Électronique flexible', 'I-V', 'MATLAB', 'Python'] },
        { title: 'Système de suivi solaire photovoltaïque', desc: "Développement en tant que chef de projet d'un système de suivi solaire automatique basé sur microcontrôleur 51. Conception de circuit, layout PCB et vérification par simulation. Suivi en temps réel des panneaux photovoltaïques.", tags: ['MCU 51', 'PCB', 'Contrôle', 'Photovoltaïque'] },
        { title: 'Revue sur la bioélectronique flexible', desc: "Contribution à un article de revue sur la bioélectronique flexible au SIAT, en étudiant les technologies de capteurs portables de pointe. Analyse de la conception structurelle, des méthodes d'acquisition de signaux et des scénarios d'application de divers dispositifs bioélectroniques. Participation à la conception du cadre et à la rédaction technique.", tags: ['Bioélectronique', 'Capteurs portables', 'Revue', 'Article'] },
        { title: "Intégration électronique du véhicule", desc: "Participation à l'intégration et au débogage du système électrique complet de la voiture autonome FSAE, avec contrôle coopératif multi-modules. Conception et vérification fonctionnelle des circuits. Fonctionnement stable assuré en conditions de conduite complexes.", tags: ['Intégration', 'Circuits', 'Multi-module', 'FSAE'] }
      ]
    },
    software: {
      heading: 'Logiciels et outils',
      items: [
        { title: 'Interface de contrôle de direction', desc: 'Interface Python pour la visualisation en temps réel, le réglage des paramètres et la surveillance du système de direction FSAE. Développée indépendamment.' },
        { title: "Outils d'analyse de données de capteurs", desc: "Scripts MATLAB et Python pour l'analyse de courbes I-V, le prétraitement du signal et la visualisation de données expérimentales." },
        { title: 'Modélisation 3D SolidWorks', desc: "Modélisation 3D, vérification d'assemblage et génération de dessins techniques pour le système de direction FSAE et les composants mécaniques." },
        { title: 'Conception PCB et schémas', desc: "Flux de conception PCB complet : capture de schéma, layout, vérification des règles et génération de fichiers de fabrication pour systèmes automobiles et embarqués." },
        { title: 'Micrologiciel embarqué et configuration système', desc: "Programmation de modules embarqués et configuration Linux (Ubuntu), incluant la mise en place de la chaîne d'outils et le déploiement du micrologiciel." }
      ]
    },
    publications: {
      heading: 'Publications',
      empty: 'Les articles et publications seront mis à jour ici.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Co-auteur)'], journal: 'Wearable Electronics', year: 2026, note: 'Accepté, sous presse' },
        { title: 'Système matériel de contrôle de boucle de sécurité et de gestion des pannes (CN223955993U)', authors: ['L. Wang (Premier inventeur)'], journal: 'Brevet de modèle d\'utilité (Chine)', year: 2025 },
        { title: 'Boîtier d\'intégration de système de course — Basse tension (CN309876302S)', authors: ['L. Wang (Premier inventeur)'], journal: 'Brevet de design (Chine)', year: 2025 }
      ]
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email :',
      githubLabel: 'GitHub :',
      scholarLabel: 'Google Scholar :',
      linkedinLabel: 'LinkedIn :',
      toBeAdded: 'À venir'
    },
    footer: { copyright: 'Luyao Wang © 2026. Tous droits réservés.' }
  },

  de: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'Über mich', research: 'Forschung', projects: 'Projekte', software: 'Software', publications: 'Publikationen', contact: 'Kontakt' },
    about: {
      heading: 'Über mich',
      bio1: 'Ich bin Bachelor-Studentin am Harbin Institute of Technology (HIT) mit Hauptfach Mess- und Regelungstechnik. Mein Forschungsschwerpunkt liegt auf flexibler Elektronik und tragbaren Sensoren — ich untersuche das elektrische Verhalten niedrigdimensionaler Nanomaterialien unter mechanischer Verformung, die Bauteilstabilität und die Optimierung von Sensorstrukturen.',
      bio2: 'Über die flexible Elektronik hinaus verfüge ich über praktische Erfahrung im gesamten Hardware-Software-Stack: eingebettetes Schaltungsdesign und PCB-Layout, Python-basierte GUI-Entwicklung für Echtzeitüberwachung, SolidWorks 3D-Modellierung und Linux-Systembetrieb. Meine zwei Jahre als Leiterin des Lenksystems im Formula-Student-Rennteam von HIT haben mich gelehrt, Sensoren, Aktoren, eingebettete Firmware und Regelungsalgorithmen in zuverlässige reale Systeme zu integrieren.'
    },
    research: {
      heading: 'Forschungsinteressen',
      items: [
        'Flexible Elektronik und Sensoren aus niedrigdimensionalen Nanomaterialien',
        'Tragbare energieautarke Systeme (Energy Harvesting, Speicherung, Energiemanagement)',
        'Flexible Bioelektronik und Biosignal-Erfassung',
        'Elektronische Haut und taktile Sensorik für Roboter',
        'Eingebettete Systeme, PCB-Layout und Sensorschnittstellen',
        'Echtzeit-GUI- und Systemsoftware-Entwicklung',
        'Regelungssysteme und Fahrzeugelektronik für autonomes Fahren',
        'KI-gestützte Sensordatenanalyse und Signalverarbeitung'
      ]
    },
    projects: {
      heading: 'Ausgewählte Projekte',
      items: [
        { title: 'FSAE Autonomes Lenksystem', desc: 'Entwurf eines dualen PID-Lenksystems für das autonome Formula-Student-Rennauto von HIT. 3D-Modellierung und Montageprüfung mit SolidWorks. Eigenständige Entwicklung einer Python-basierten Steuerungssoftware für Echtzeitvisualisierung, Parameterabstimmung und Zustandsüberwachung. Eingebettete Programmierung und Systemintegration unter Ubuntu.', tags: ['PID-Regelung', 'SolidWorks', 'Python GUI', 'Embedded', 'PCB-Design'] },
        { title: 'RES Dual-Platinen-System', desc: 'Entwurf einer Dual-Platinen-Lösung für das RES (Race Emergency System) mit Schaltplanentwurf, PCB-Layout, Fertigungsverifikation und Hardware-Integration. Zuverlässiger Systembetrieb unter komplexen Rennbedingungen.', tags: ['PCB-Layout', 'Schaltplan', 'Hardware-Test', 'Automotive'] },
        { title: 'I-V-Charakterisierung flexibler Elektronik', desc: 'Aufbau von I-V-Messschaltungen zur Analyse des elektrischen Verhaltens niedrigdimensionaler Nanomaterialien unter Biegung. Datenverarbeitung mit MATLAB/Python. Teilnahme an Sensorstrukturoptimierung zur Untersuchung des Einflusses von Materialparametern auf Empfindlichkeit und Ansprechzeit.', tags: ['Flexible Elektronik', 'I-V', 'MATLAB', 'Python'] },
        { title: 'Solares Nachführsystem', desc: 'Entwicklung eines automatischen solaren Nachführsystems auf Basis eines 51-Mikrocontrollers als Projektleiter. Schaltungsdesign, PCB-Layout und Systemsimulation. Echtzeit-Sonnennachführung für Photovoltaik-Panels.', tags: ['51 MCU', 'PCB-Design', 'Regelung', 'Photovoltaik'] },
        { title: 'Review zur flexiblen Bioelektronik', desc: 'Beteiligung an einem Übersichtsartikel zur flexiblen Bioelektronik am SIAT mit Untersuchung modernster tragbarer Sensortechnologien. Analyse von Strukturdesign, Signalerfassungsmethoden und Anwendungsszenarien bioelektronischer Geräte. Beteiligung an Framework-Design und technischem Schreiben.', tags: ['Bioelektronik', 'Wearables', 'Literaturreview', 'Publikation'] },
        { title: 'Fahrzeugelektronik-Integration', desc: 'Beteiligung an der vollständigen elektrischen Systemintegration und Fehlerbehebung des autonomen FSAE-Fahrzeugs mit kooperativer Multimodul-Steuerung. Schaltungsdesign und Funktionsverifikation für stabilen Betrieb unter komplexen Fahrbedingungen.', tags: ['Integration', 'Schaltungsdesign', 'Multimodul', 'FSAE'] }
      ]
    },
    software: {
      heading: 'Software & Werkzeuge',
      items: [
        { title: 'Lenksystem-Steuerungs-GUI', desc: 'Python-basierte GUI für Echtzeitvisualisierung, Online-Parameterabstimmung und Zustandsüberwachung des FSAE-Lenksystems. Eigenständig entwickelt.' },
        { title: 'Sensordaten-Analysetoolkit', desc: 'MATLAB- und Python-Skripte für I-V-Kurvenanalyse, Signalvorverarbeitung und Visualisierung von Experimentaldaten für die flexible Elektronik.' },
        { title: 'SolidWorks 3D-Modellierung', desc: '3D-Bauteilmodellierung, Montageprüfung und Erstellung von Konstruktionszeichnungen für das FSAE-Lenksystem und mechanische Komponenten.' },
        { title: 'PCB-Design & Schaltplan-Layout', desc: 'Vollständiger PCB-Design-Workflow mit Schaltplaneingabe, Layout, Design-Rule-Check und Fertigungsdaten für Automotive- und Embedded-Systeme.' },
        { title: 'Embedded Firmware & Systemkonfiguration', desc: 'Programmierung eingebetteter Steuermodule und Linux-(Ubuntu)-Systemkonfiguration, einschließlich Toolchain-Setup und Firmware-Bereitstellung.' }
      ]
    },
    publications: {
      heading: 'Publikationen',
      empty: 'Ausgewählte Manuskripte und Publikationen werden hier aktualisiert.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Co-Autorin)'], journal: 'Wearable Electronics', year: 2026, note: 'Angenommen, im Druck' },
        { title: 'Hardware-basiertes Sicherheitsschleifen-Steuerungs- und Fehlerbehandlungssystem (CN223955993U)', authors: ['L. Wang (Ersterfinderin)'], journal: 'Chinesisches Gebrauchsmuster (erteilt)', year: 2025 },
        { title: 'Systemintegrationsbox für Rennwagen — Niederspannung (CN309876302S)', authors: ['L. Wang (Ersterfinderin)'], journal: 'Chinesisches Designpatent (erteilt)', year: 2025 }
      ]
    },
    contact: {
      heading: 'Kontakt',
      emailLabel: 'E-Mail:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'Wird hinzugefügt'
    },
    footer: { copyright: 'Luyao Wang © 2026. Alle Rechte vorbehalten.' }
  },

  es: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'Sobre mí', research: 'Investigación', projects: 'Proyectos', software: 'Software', publications: 'Publicaciones', contact: 'Contacto' },
    about: {
      heading: 'Sobre mí',
      bio1: 'Soy investigadora de pregrado en el Instituto de Tecnología de Harbin (HIT), especializada en Tecnología de Medición y Control. Mi investigación se centra en la electrónica flexible y los sensores portátiles — investigo el comportamiento eléctrico de nanomateriales de baja dimensión bajo deformación mecánica, la estabilidad de dispositivos y la optimización de estructuras de sensores.',
      bio2: 'Más allá de la electrónica flexible, tengo experiencia práctica en toda la cadena hardware-software: diseño de circuitos embebidos y PCB, desarrollo de GUI en Python para monitoreo en tiempo real, modelado 3D con SolidWorks y administración de sistemas Linux. Mis dos años liderando el sistema de dirección del equipo de carreras autónomas Formula Student de HIT me enseñaron a integrar sensores, actuadores, firmware embebido y algoritmos de control en sistemas reales confiables.'
    },
    research: {
      heading: 'Intereses de investigación',
      items: [
        'Electrónica flexible y sensores basados en nanomateriales de baja dimensión',
        'Sistemas energéticos portátiles auto-sostenibles (recolección, almacenamiento, gestión)',
        'Bioelectrónica flexible y adquisición de señales biológicas',
        'Piel electrónica y detección táctil para percepción robótica',
        'Diseño de sistemas embebidos, PCB y circuitos de interfaz de sensores',
        'GUI de monitoreo en tiempo real y software de control',
        'Sistemas de control en lazo cerrado y electrónica para vehículos autónomos',
        'Análisis de datos de sensores con IA y procesamiento de señales'
      ]
    },
    projects: {
      heading: 'Proyectos seleccionados',
      items: [
        { title: 'Sistema de dirección autónoma FSAE', desc: 'Diseño de un sistema de dirección de doble PID para el coche de carreras autónomo Formula Student de HIT. Modelado 3D y verificación de ensamblaje con SolidWorks. Desarrollo independiente de software de control en Python para visualización en tiempo real, ajuste de parámetros y monitoreo de estado. Programación embebida e integración de sistemas en Ubuntu.', tags: ['Control PID', 'SolidWorks', 'Python GUI', 'Embebido', 'Diseño PCB'] },
        { title: 'Sistema de doble placa RES', desc: 'Diseño de una solución de doble placa para el RES (Sistema de Emergencia de Carrera), cubriendo esquemáticos, layout PCB, verificación y integración. Funcionamiento fiable garantizado en condiciones complejas de carrera.', tags: ['Layout PCB', 'Esquemáticos', 'Test hardware', 'Automoción'] },
        { title: 'Caracterización I-V de electrónica flexible', desc: 'Construcción de circuitos de medida I-V para analizar el rendimiento eléctrico de nanomateriales bajo flexión. Procesamiento de datos con MATLAB/Python. Participación en optimización de sensores para estudiar el impacto de parámetros en sensibilidad y tiempo de respuesta.', tags: ['Electrónica flexible', 'I-V', 'MATLAB', 'Python'] },
        { title: 'Sistema de seguimiento solar', desc: 'Desarrollo como líder de proyecto de un sistema automático de seguimiento solar basado en microcontrolador 51. Diseño de circuito, layout PCB y verificación por simulación. Seguimiento en tiempo real de paneles fotovoltaicos.', tags: ['MCU 51', 'Diseño PCB', 'Control', 'Fotovoltaico'] },
        { title: 'Revisión de bioelectrónica flexible', desc: 'Contribución a un artículo de revisión sobre bioelectrónica flexible en SIAT, investigando tecnologías de sensores portátiles de vanguardia. Análisis de diseño estructural, métodos de adquisición de señales y escenarios de aplicación. Participación en el diseño del marco y redacción técnica.', tags: ['Bioelectrónica', 'Sensores portátiles', 'Revisión', 'Publicación'] },
        { title: 'Integración electrónica del vehículo', desc: 'Participación en la integración y depuración del sistema eléctrico completo del vehículo autónomo FSAE, logrando control cooperativo multimódulo. Diseño de circuitos y verificación funcional para funcionamiento estable en condiciones complejas.', tags: ['Integración', 'Circuitos', 'Multimódulo', 'FSAE'] }
      ]
    },
    software: {
      heading: 'Software y herramientas',
      items: [
        { title: 'GUI de control de dirección', desc: 'Interfaz Python para visualización en tiempo real, ajuste de parámetros y monitoreo del sistema de dirección FSAE. Desarrollada independientemente.' },
        { title: 'Herramientas de análisis de datos de sensores', desc: 'Scripts MATLAB y Python para análisis de curvas I-V, preprocesamiento de señales y visualización de datos experimentales.' },
        { title: 'Modelado 3D SolidWorks', desc: 'Modelado 3D de piezas, verificación de ensamblaje y generación de planos para el sistema de dirección FSAE y componentes mecánicos.' },
        { title: 'Diseño PCB y esquemáticos', desc: 'Flujo completo de diseño PCB: captura de esquemas, layout, verificación de reglas y generación de archivos de fabricación para sistemas automotrices y embebidos.' },
        { title: 'Firmware embebido y configuración de sistema', desc: 'Programación de módulos de control embebidos y configuración de Linux (Ubuntu), incluyendo toolchain y despliegue de firmware.' }
      ]
    },
    publications: {
      heading: 'Publicaciones',
      empty: 'Los manuscritos y publicaciones se actualizarán aquí.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Co-autora)'], journal: 'Wearable Electronics', year: 2026, note: 'Aceptado, en prensa' },
        { title: 'Sistema de control de bucle de seguridad y gestión de fallos basado en hardware (CN223955993U)', authors: ['L. Wang (Primera inventora)'], journal: 'Patente de modelo de utilidad (China)', year: 2025 },
        { title: 'Caja de integración de sistema de carreras — Baja tensión (CN309876302S)', authors: ['L. Wang (Primera inventora)'], journal: 'Patente de diseño (China)', year: 2025 }
      ]
    },
    contact: {
      heading: 'Contacto',
      emailLabel: 'Email:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'Próximamente'
    },
    footer: { copyright: 'Luyao Wang © 2026. Todos los derechos reservados.' }
  },

  pt: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'Sobre', research: 'Pesquisa', projects: 'Projetos', software: 'Software', publications: 'Publicações', contact: 'Contato' },
    about: {
      heading: 'Sobre',
      bio1: 'Sou pesquisadora de graduação no Instituto de Tecnologia de Harbin (HIT), com especialização em Tecnologia de Medição e Controle. Minha pesquisa se concentra em eletrônica flexível e sensores vestíveis — investigo o comportamento elétrico de nanomateriais de baixa dimensão sob deformação mecânica, estabilidade de dispositivos e otimização de estruturas de sensores.',
      bio2: 'Além da eletrônica flexível, tenho experiência prática em toda a cadeia hardware-software: design de circuitos embarcados e layout de PCB, desenvolvimento de GUI em Python para monitoramento em tempo real, modelagem 3D com SolidWorks e operação de sistemas Linux. Meus dois anos liderando o sistema de direção da equipe de corrida autônoma Formula Student da HIT me ensinaram a integrar sensores, atuadores, firmware embarcado e algoritmos de controle em sistemas reais confiáveis.'
    },
    research: {
      heading: 'Interesses de pesquisa',
      items: [
        'Eletrônica flexível e sensores baseados em nanomateriais de baixa dimensão',
        'Sistemas energéticos vestíveis auto-sustentáveis (coleta, armazenamento, gestão)',
        'Bioeletrônica flexível e aquisição de sinais biológicos',
        'Pele eletrônica e detecção tátil para percepção robótica',
        'Design de sistemas embarcados, layout de PCB e circuitos de interface de sensores',
        'GUI de monitoramento em tempo real e software de controle',
        'Sistemas de controle em malha fechada e eletrônica para veículos autônomos',
        'Análise de dados de sensores com IA e processamento de sinais'
      ]
    },
    projects: {
      heading: 'Projetos selecionados',
      items: [
        { title: 'Sistema de direção autônoma FSAE', desc: 'Design de um sistema de direção com duplo PID para o carro de corrida autônomo Formula Student da HIT. Modelagem 3D e verificação de montagem com SolidWorks. Desenvolvimento independente de software de controle em Python para visualização em tempo real, ajuste de parâmetros e monitoramento de estado. Programação embarcada e integração de sistemas no Ubuntu.', tags: ['Controle PID', 'SolidWorks', 'Python GUI', 'Embarcado', 'Design PCB'] },
        { title: 'Sistema de placa dupla RES', desc: 'Design de uma solução de placa dupla para o RES (Sistema de Emergência de Corrida), cobrindo esquemáticos, layout de PCB, verificação de fabricação e integração de hardware. Operação confiável garantida em condições complexas de corrida.', tags: ['Layout PCB', 'Esquemáticos', 'Teste hardware', 'Automotivo'] },
        { title: 'Caracterização I-V de eletrônica flexível', desc: 'Construção de circuitos de medição I-V para analisar o desempenho elétrico de nanomateriais sob flexão. Processamento de dados com MATLAB/Python. Participação na otimização de sensores para estudar o impacto dos parâmetros na sensibilidade e tempo de resposta.', tags: ['Eletrônica flexível', 'I-V', 'MATLAB', 'Python'] },
        { title: 'Sistema de rastreamento solar', desc: 'Desenvolvimento como líder de projeto de um sistema automático de rastreamento solar baseado em microcontrolador 51. Design de circuito, layout de PCB e verificação por simulação. Rastreamento em tempo real para painéis fotovoltaicos.', tags: ['MCU 51', 'Design PCB', 'Controle', 'Fotovoltaico'] },
        { title: 'Revisão de bioeletrônica flexível', desc: 'Contribuição para um artigo de revisão sobre bioeletrônica flexível no SIAT, investigando tecnologias de sensores vestíveis de ponta. Análise de design estrutural, métodos de aquisição de sinais e cenários de aplicação. Participação no design do framework e redação técnica.', tags: ['Bioeletrônica', 'Sensores vestíveis', 'Revisão', 'Publicação'] },
        { title: 'Integração eletrônica do veículo', desc: 'Participação na integração e depuração do sistema elétrico completo do veículo autônomo FSAE, alcançando controle cooperativo multimódulo. Design de circuitos e verificação funcional para operação estável em condições complexas.', tags: ['Integração', 'Circuitos', 'Multimódulo', 'FSAE'] }
      ]
    },
    software: {
      heading: 'Software e ferramentas',
      items: [
        { title: 'GUI de controle de direção', desc: 'Interface Python para visualização em tempo real, ajuste de parâmetros e monitoramento do sistema de direção FSAE. Desenvolvida independentemente.' },
        { title: 'Ferramentas de análise de dados de sensores', desc: 'Scripts MATLAB e Python para análise de curvas I-V, pré-processamento de sinais e visualização de dados experimentais.' },
        { title: 'Modelagem 3D SolidWorks', desc: 'Modelagem 3D de peças, verificação de montagem e geração de desenhos técnicos para o sistema de direção FSAE e componentes mecânicos.' },
        { title: 'Design de PCB e esquemáticos', desc: 'Fluxo completo de design de PCB: captura de esquemas, layout, verificação de regras e geração de arquivos de fabricação para sistemas automotivos e embarcados.' },
        { title: 'Firmware embarcado e configuração de sistema', desc: 'Programação de módulos de controle embarcados e configuração de Linux (Ubuntu), incluindo toolchain e implantação de firmware.' }
      ]
    },
    publications: {
      heading: 'Publicações',
      empty: 'Manuscritos e publicações serão atualizados aqui.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Co-autora)'], journal: 'Wearable Electronics', year: 2026, note: 'Aceito, no prelo' },
        { title: 'Sistema de controle de malha de segurança e gestão de falhas baseado em hardware (CN223955993U)', authors: ['L. Wang (Primeira inventora)'], journal: 'Patente de modelo de utilidade (China)', year: 2025 },
        { title: 'Caixa de integração de sistema de corrida — Baixa tensão (CN309876302S)', authors: ['L. Wang (Primeira inventora)'], journal: 'Patente de design (China)', year: 2025 }
      ]
    },
    contact: {
      heading: 'Contato',
      emailLabel: 'Email:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'Em breve'
    },
    footer: { copyright: 'Luyao Wang © 2026. Todos os direitos reservados.' }
  },

  ru: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'Обо мне', research: 'Наука', projects: 'Проекты', software: 'Софт', publications: 'Публикации', contact: 'Контакты' },
    about: {
      heading: 'Обо мне',
      bio1: 'Я студентка-исследователь Харбинского политехнического университета (HIT) по специальности «Измерительная и контрольная техника». Мои исследования сосредоточены на гибкой электронике и носимых сенсорах — я изучаю электрическое поведение низкоразмерных наноматериалов при механической деформации, стабильность устройств и оптимизацию сенсорных структур.',
      bio2: 'Помимо гибкой электроники, у меня есть практический опыт во всём стеке аппаратного и программного обеспечения: проектирование встраиваемых схем и PCB, разработка GUI на Python для мониторинга в реальном времени, 3D-моделирование в SolidWorks и администрирование Linux. Два года руководства системой рулевого управления в команде беспилотных гонок Formula Student HIT научили меня интегрировать датчики, приводы, встроенное ПО и алгоритмы управления в надёжные реальные системы.'
    },
    research: {
      heading: 'Научные интересы',
      items: [
        'Гибкая электроника и сенсоры на основе низкоразмерных наноматериалов',
        'Носимые автономные энергосистемы (сбор, хранение, управление энергией)',
        'Гибкая биоэлектроника и сбор биосигналов',
        'Электронная кожа и тактильное восприятие для роботов',
        'Встраиваемые системы, PCB и интерфейсные схемы датчиков',
        'GUI мониторинга и разработка управляющего ПО',
        'Замкнутые системы управления и электроника для автономных автомобилей',
        'Анализ данных датчиков с ИИ и обработка сигналов'
      ]
    },
    projects: {
      heading: 'Избранные проекты',
      items: [
        { title: 'Система рулевого управления FSAE', desc: 'Разработка системы рулевого управления с двойным ПИД-регулятором для беспилотного гоночного автомобиля Formula Student HIT. 3D-моделирование и проверка сборки в SolidWorks. Самостоятельная разработка ПО на Python для визуализации данных, настройки параметров и мониторинга состояния в реальном времени. Программирование встраиваемых модулей и интеграция в Ubuntu.', tags: ['ПИД', 'SolidWorks', 'Python GUI', 'Embedded', 'PCB'] },
        { title: 'Двойная плата системы RES', desc: 'Разработка решения с двумя платами для RES (аварийная гоночная система): схемотехника, PCB, верификация и интеграция. Надёжная работа в сложных гоночных условиях.', tags: ['PCB', 'Схемотехника', 'Тесты', 'Авто'] },
        { title: 'I-V характеризация гибкой электроники', desc: 'Создание измерительных I-V цепей для анализа электрических характеристик наноматериалов при изгибе. Обработка данных в MATLAB/Python. Участие в оптимизации структуры датчиков.', tags: ['Гибкая электроника', 'I-V', 'MATLAB', 'Python'] },
        { title: 'Система слежения за солнцем', desc: 'Разработка автоматической системы слежения за солнцем на базе микроконтроллера 51 в качестве руководителя проекта. Проектирование схем, PCB и симуляция.', tags: ['51 MCU', 'PCB', 'Управление', 'Фотоэлектрика'] },
        { title: 'Обзор гибкой биоэлектроники', desc: 'Участие в обзорной статье по гибкой биоэлектронике в SIAT. Анализ передовых носимых сенсорных технологий. Участие в проектировании структуры и написании статьи.', tags: ['Биоэлектроника', 'Сенсоры', 'Обзор', 'Публикация'] },
        { title: 'Интеграция электроники автомобиля', desc: 'Участие в полной интеграции и отладке электрической системы беспилотного автомобиля FSAE с многомодульным управлением.', tags: ['Интеграция', 'Схемы', 'Мультимодуль', 'FSAE'] }
      ]
    },
    software: {
      heading: 'ПО и инструменты',
      items: [
        { title: 'GUI системы рулевого управления', desc: 'Python-интерфейс для визуализации, настройки параметров и мониторинга системы рулевого управления FSAE.' },
        { title: 'Инструменты анализа данных датчиков', desc: 'Скрипты MATLAB и Python для анализа I-V кривых, предобработки сигналов и визуализации экспериментальных данных.' },
        { title: '3D-моделирование SolidWorks', desc: '3D-моделирование деталей, проверка сборки и создание чертежей для системы рулевого управления FSAE.' },
        { title: 'Проектирование PCB и схем', desc: 'Полный цикл проектирования PCB: схемотехника, разводка, проверка правил и генерация файлов для производства.' },
        { title: 'Встроенное ПО и конфигурация системы', desc: 'Программирование встраиваемых модулей и настройка Linux (Ubuntu), включая toolchain и развёртывание прошивки.' }
      ]
    },
    publications: {
      heading: 'Публикации',
      empty: 'Избранные рукописи и публикации будут обновлены здесь.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(Соавтор)'], journal: 'Wearable Electronics', year: 2026, note: 'Принято, в печати' },
        { title: 'Аппаратная система управления контуром безопасности (CN223955993U)', authors: ['Л. Ван (Первый автор)'], journal: 'Патент КНР на полезную модель', year: 2025 },
        { title: 'Блок системной интеграции гоночного автомобиля (CN309876302S)', authors: ['Л. Ван (Первый автор)'], journal: 'Патент КНР на дизайн', year: 2025 }
      ]
    },
    contact: {
      heading: 'Контакты',
      emailLabel: 'Email:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'Будет добавлено'
    },
    footer: { copyright: 'Luyao Wang © 2026. Все права защищены.' }
  },

  ar: {
    brand: 'Luyao Wang',
    languages: { en: 'English', 'zh-CN': '简体中文', 'zh-TW': '繁體中文', ja: '日本語', ko: '한국어', fr: 'Français', de: 'Deutsch', es: 'Español', pt: 'Português', ru: 'Русский', ar: 'العربية' },
    nav: { about: 'نبذة', research: 'بحث', projects: 'مشاريع', software: 'برمجيات', publications: 'منشورات', contact: 'اتصال' },
    about: {
      heading: 'نبذة عني',
      bio1: 'أنا باحثة جامعية في معهد هاربين للتكنولوجيا (HIT)، متخصصة في تكنولوجيا القياس والتحكم. يركز بحثي على الإلكترونيات المرنة وأجهزة الاستشعار القابلة للارتداء — أدرس السلوك الكهربائي للمواد النانوية منخفضة الأبعاد تحت التشوه الميكانيكي، واستقرار الأجهزة، وتحسين هياكل الاستشعار.',
      bio2: 'إلى جانب الإلكترونيات المرنة، لدي خبرة عملية عبر كامل مجموعة الأجهزة والبرمجيات: تصميم الدوائر المدمجة وتخطيط PCB، وتطوير واجهات المستخدم الرسومية بلغة Python للمراقبة في الوقت الفعلي، والنمذجة ثلاثية الأبعاد باستخدام SolidWorks، وتشغيل أنظمة Linux. علمتني سنتاي في قيادة نظام التوجيه لفريق سباقات Formula Student في HIT كيفية دمج المستشعرات والمشغلات والبرامج الثابتة المدمجة وخوارزميات التحكم في أنظمة حقيقية موثوقة.'
    },
    research: {
      heading: 'الاهتمامات البحثية',
      items: [
        'الإلكترونيات المرنة وأجهزة الاستشعار القائمة على المواد النانوية',
        'أنظمة الطاقة القابلة للارتداء ذاتية الاستدامة (جمع وتخزين وإدارة الطاقة)',
        'الإلكترونيات الحيوية المرنة واكتساب الإشارات الحيوية',
        'الجلد الإلكتروني والاستشعار اللمسي للإدراك الروبوتي',
        'تصميم الأنظمة المدمجة وتخطيط PCB ودوائر واجهة المستشعرات',
        'تطوير واجهات المراقبة في الوقت الفعلي وبرمجيات التحكم',
        'أنظمة التحكم ذات الحلقة المغلقة وإلكترونيات المركبات الذاتية',
        'تحليل بيانات المستشعرات بالذكاء الاصطناعي ومعالجة الإشارات'
      ]
    },
    projects: {
      heading: 'مشاريع مختارة',
      items: [
        { title: 'نظام التوجيه الذاتي FSAE', desc: 'تصميم نظام توجيه بمتحكم PID مزدوج لسيارة السباق الذاتية القيادة Formula Student HIT. النمذجة ثلاثية الأبعاد والتحقق من التجميع باستخدام SolidWorks. تطوير مستقل لبرنامج تحكم بلغة Python للمراقبة وضبط المعلمات في الوقت الفعلي. برمجة الأنظمة المدمجة والتكامل على Ubuntu.', tags: ['PID', 'SolidWorks', 'Python GUI', 'مدمج', 'PCB'] },
        { title: 'نظام اللوحة المزدوجة RES', desc: 'تصميم حل بلوحة مزدوجة لنظام الطوارئ في السباقات (RES)، يشمل المخططات وتخطيط PCB والتحقق من التصنيع والتكامل. ضمان التشغيل الموثوق في ظروف السباق المعقدة.', tags: ['PCB', 'مخططات', 'اختبار', 'سيارات'] },
        { title: 'توصيف I-V للأجهزة الإلكترونية المرنة', desc: 'بناء دوائر قياس I-V لتحليل الأداء الكهربائي للمواد النانوية تحت الانحناء. معالجة البيانات باستخدام MATLAB/Python. المشاركة في تحسين هياكل المستشعرات.', tags: ['إلكترونيات مرنة', 'I-V', 'MATLAB', 'Python'] },
        { title: 'نظام تتبع الطاقة الشمسية', desc: 'تطوير نظام تتبع شمسي تلقائي قائم على متحكم 51 كقائدة للمشروع. تصميم الدوائر وتخطيط PCB والتحقق بالمحاكاة.', tags: ['51 MCU', 'تصميم PCB', 'تحكم', 'طاقة شمسية'] },
        { title: 'مراجعة الإلكترونيات الحيوية المرنة', desc: 'المساهمة في مقال مراجعة حول الإلكترونيات الحيوية المرنة في SIAT. دراسة تقنيات المستشعرات القابلة للارتداء المتطورة. المشاركة في تصميم الإطار والكتابة التقنية.', tags: ['إلكترونيات حيوية', 'مستشعرات', 'مراجعة', 'منشور'] },
        { title: 'تكامل إلكترونيات المركبة', desc: 'المشاركة في التكامل الكامل وتصحيح أخطاء النظام الكهربائي للمركبة الذاتية القيادة FSAE مع تحكم تعاوني متعدد الوحدات.', tags: ['تكامل', 'دوائر', 'متعدد الوحدات', 'FSAE'] }
      ]
    },
    software: {
      heading: 'البرمجيات والأدوات',
      items: [
        { title: 'واجهة التحكم في نظام التوجيه', desc: 'واجهة Python للمراقبة وضبط المعلمات ومراقبة حالة نظام التوجيه FSAE في الوقت الفعلي. تم تطويرها بشكل مستقل.' },
        { title: 'أدوات تحليل بيانات المستشعرات', desc: 'سكربتات MATLAB وPython لتحليل منحنيات I-V والمعالجة المسبقة للإشارات وتصور البيانات التجريبية.' },
        { title: 'النمذجة ثلاثية الأبعاد SolidWorks', desc: 'نمذجة ثلاثية الأبعاد للأجزاء والتحقق من التجميع وإنشاء الرسومات الهندسية لنظام التوجيه FSAE والمكونات الميكانيكية.' },
        { title: 'تصميم PCB والمخططات', desc: 'سير عمل كامل لتصميم PCB: التقاط المخططات والتخطيط والتحقق من قواعد التصميم وإنشاء ملفات التصنيع للأنظمة المدمجة.' },
        { title: 'البرامج الثابتة المدمجة وتكوين النظام', desc: 'برمجة وحدات التحكم المدمجة وتكوين Linux (Ubuntu)، بما في ذلك إعداد toolchain ونشر البرامج الثابتة.' }
      ]
    },
    publications: {
      heading: 'المنشورات',
      empty: 'سيتم تحديث المخطوطات والمنشورات المختارة هنا.',
      items: [
        { title: 'Toward Self-Sustained Wearables: Energy Harvesting, Storage, and Smart Power Management', authors: ['(مؤلف مشارك)'], journal: 'Wearable Electronics', year: 2026, note: 'مقبول، قيد النشر' },
        { title: 'نظام التحكم في حلقة الأمان القائم على الأجهزة (CN223955993U)', authors: ['ل. وانغ (المخترع الأول)'], journal: 'براءة اختراع نموذج منفعة (الصين)', year: 2025 },
        { title: 'صندوق تكامل نظام سيارة السباق (CN309876302S)', authors: ['ل. وانغ (المخترع الأول)'], journal: 'براءة اختراع تصميم (الصين)', year: 2025 }
      ]
    },
    contact: {
      heading: 'اتصل بي',
      emailLabel: 'البريد:',
      githubLabel: 'GitHub:',
      scholarLabel: 'Google Scholar:',
      linkedinLabel: 'LinkedIn:',
      toBeAdded: 'سيتم الإضافة'
    },
    footer: { copyright: 'Luyao Wang © 2026. جميع الحقوق محفوظة.' }
  }
};

export default translations;
