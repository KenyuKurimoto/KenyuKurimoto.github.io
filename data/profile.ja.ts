import { ProfileData } from "./types";

export const profileJa: ProfileData = {
  lastUpdated: "2026-03-02",
  name: "栗本 健有",
  nameEn: "Ken'yu Kurimoto",
  title: "ソフトウェアエンジニア",
  avatar: "/assets/avatar.jpg",
  summary: [
    "大学院修士課程修了後、ロボットの内製開発を軸に、ハードウェア設計からROSベースのソフトウェア開発まで一貫して取り組んできました。特に、エレベーター・自動扉・施設リソース管理サーバーとの連携など、ロボットと建物インフラを統合するシステムの設計・実装を担当してきました。また、国家プロジェクトを含む複数の実証実験に参画し、屋外自律配送ロボットの開発および公道環境での実証運用に携わるなど、サービスロボットの社会実装にも取り組んできました。",
    "生成AIの台頭により、エンジニアに求められる価値は実装力に加えて構想力・統合力へと拡張していると感じています。私はこの変化の中で、生成AIをロボットや社会インフラと結びつけた新しいシステムを構想・設計し、実装から社会実装まで担えるエンジニアを目指しています。サービスロボットが人間のパートナーとして社会に溢れる世界の実現に向け、特に2つの領域に高い関心を抱いています。",
    "一つは「フィジカルAI領域」。学生時代より深層学習・画像認識に取り組んできた経験を基盤として、AIを活用したサービスロボットの実装と社会展開に本格的に向き合いたいと考えています。",
    "もう一つは「ソフトウェアインフラとロボットの連携」。今後需要が増すサービスロボットが社会に受容されるためには、ロボット単体の機能開発だけでなく、ロボットが都市スケールのシステムの一部として機能するためのソフトウェア基盤の構築が不可欠です。物理インフラや施設・都市の上位システムとスムーズに連携できる仕組みを整えることに今後も取り組んでいきます。",
  ],
  contact: {},
  skills: [
    {
      category: "言語",
      tags: ["C++", "Python", "C#", "Bash", "Swift", "JavaScript"],
    },
    {
      category: "ロボティクス",
      tags: ["ROS/ROS2", "MoveIt", "Nav2", "Zenoh"],
    },
    {
      category: "知覚 / AI",
      tags: ["SLAM", "OpenCV", "PCL", "物体検出", "点群処理"],
    },
    {
      category: "シミュレーション",
      tags: ["Gazebo", "RViz2", "Isaac Sim", "URDF / SDF"],
    },
    {
      category: "ハードウェア / 組込み",
      tags: [
        "NVIDIA Jetson",
        "Raspberry Pi",
        "Arduino",
        "CAN bus",
        "Inventor CAD",
        "KiCad",
        "3Dプリンタ",
      ],
    },
    {
      category: "開発環境 / DevOps",
      tags: [
        "Docker",
        "Git",
        "GitHub Actions",
        "Ansible",
        "Linux (Ubuntu)",
        "ClaudeCode",
        "tmux",
        "emacs",
        "VSCode",
      ],
    },
  ],
  experience: [
    {
      company: "ソフトバンク株式会社",
      companyUrl: "https://www.softbank.jp/corp/",
      role: "ソフトウェアエンジニア",
      period: "2019年4月 〜 現在",
      overview:
        "3D CAD設計から組み立て・ROSベースのソフトウェア開発・社内外システムとのインテグレーションまで一貫して担当する研究開発用ロボットの内製開発を主軸に、新規センサーや生成AIツールの検証とロボットへの搭載推進、社内外からの技術相談対応やPoC開発、国家プロジェクトの実証実験への中核メンバーとしての参画（技術協議・アーキテクチャ設計・報告書作成）に従事。",
      projects: [
        {
          name: "けいはんな地区におけるリソース管理サーバーを用いた複数モビリティの走行実験",
          period: "2025年 〜 2026年",
          role: "ソフトウェアエンジニア / アーキテクト",
          description:
            "デジタル庁が主導する「複数モビリティの分散協調運行基盤等の在り方に関する実証調査研究」にて、けいはんな地区での実証実験メンバーとして参画。全体アーキテクチャの策定に関与しつつ、上位システム（リソース管理サーバー・協調運行基盤）と自社RMSを連携させるためのシステムを開発。OSSの群管理システムであるOpen-RMFを自社ロボットの群制御に活用し、RFA規格に準拠したリソース管理サーバーとの接続を通して異なるベンダー間での経路調停を実現した。",
          tech: ["ROS Jazzy", "Open-RMF", "Nav2", "RFA", "Python", "MQTT", "Zenoh"],
          videos: [
            {
              url: "/assets/keihanna_1.mp4",
              caption: "リソース管理サーバーを用いた経路調停（風除室の例）",
            },
            {
              url: "/assets/keihanna_2.mp4",
              caption: "リソース管理サーバーを用いた経路調停（隘路の例）",
            },
          ],
        },
        {
          name: "屋外自律配送ロボット「Albion」の開発と実証実験への導入",
          period: "2024年 〜 2025年",
          role: "ソフトウェアエンジニア / ハードウェアエンジニア",
          description:
            "屋外配送シナリオを含む実証実験への利用を視野に入れ、屋外並びに施設内屋外エリアを走行する「遠隔操作型小型車」に該当する屋外自律配送ロボット「Albion」を開発。デザイナーから提案された外装3Dモデルを基に、Inventor CADを用いてハードウェアを設計・組み立て、既製品の走行車体をベースにハードウェア全体を構築。ソフトウェア面では、これまでROS1で実施してきた開発を本格的にROS2へ移行し、ドアの自動開閉機構、センサーフュージョン、ロック・LED・各種センサのマイコン制御、その他ロボットのベーシックな機能を実装。また、Nav2とOSSの自己位置推定機能を統合し、配布された3D点群地図を用いた走行実験を実施。同機体を青海エリアにおける公道自律走行実証に投入し、フィールド実証のためのシステム設計から実走行まで一貫して担当。",
          tech: [
            "ROS2 Jazzy",
            "Nav2",
            "RTK-GNSS",
            "Inventor CAD",
            "Python",
            "C++",
            "KiCad",
            "CAN bus",
            "Arduino",
            "NVIDIA Jetson",
          ],
          images: [
            {
              url: "/assets/albion.jpg",
              caption: "屋外自律配送ロボット「Albion」",
            },
            {
              url: "/assets/albion_ui.jpg",
              caption: "「Albion」上面のタッチパネルUI",
            },
            {
              url: "/assets/albion_scale_1.png",
            },
            {
              url: "/assets/albion_scale_2.png",
            },
          ],
          videos: [
            {
              url: "/assets/albion_on_road.mp4",
              caption: "「Albion」の公道走行",
            },
            {
              url: "/assets/albion_door.mp4",
              caption: "「Albion」のドア自動開閉の様子",
            },
          ],
          links: [
            {
              label: "青海エリアにおける実証実験紹介ページ",
              url: "https://staff.aist.go.jp/y-sasaki/aomi-mobility.html",
            },
          ],
        },
        {
          name: "「STATION Ai」へのロボット導入支援プロジェクト",
          period: "2024年",
          role: "ソフトウェアエンジニア",
          description:
            "愛知県庁から受託した「STATION Ai」の整備運営事業の一環として、ロボット導入支援に従事。Octa Robotics社提供の「LCI」システムと接続し、RFA標準規格に準拠したエレベーター・自動ドアとの連携を実現。自社ロボットのウェブアプリ連携機能を実装し、エレベーター・自動ドア位置を考慮に入れた経路設計を含む呼び出し・巡回アプリケーションを開発。TOPPANホールディングス社提供の群管理システム「Transbots」との連携機能を追加し、施設現地における導入作業全般に貢献。",
          tech: ["ROS1 Noetic", "Transbots", "RFA", "MQTT", "Python"],
          videos: [
            {
              url: "/assets/stai_door.mp4",
              caption: "「STATION Ai」における自動ドア連携の様子",
            },
            {
              url: "/assets/stai_elv.mp4",
              caption: "「STATION Ai」におけるエレベーター連携の様子",
            },
          ],
          links: [
            {
              label: "STATION Aiでのサイネージモジュール付Cuboid活用",
              url: "https://www.ros-sier.com/case/implementation-cases/station-ai",
            },
          ],
        },
        {
          name: "複数モビリティ協調運行システム",
          period: "2023年 〜 2024年",
          role: "ソフトウェアエンジニア / アーキテクト",
          description:
            "デジタル庁の「複数のモビリティの協調運行に関する実証調査研究」に参画し、複数のロボットとビルインフラシステムを統合した分散協調フレームワークを開発。協業他社との共通仕様策定やソフトウェアアーキテクチャ設計にリードメンバーとして参加し、分散協調の枠組に則ったROSロボットのプログラムを開発。2次元地図とトポロジカル・グラフ情報をベンダー間で共有してそれに則った走行を実施する前提に従い、自社ロボットの走行フローを改修。REST APIによるエレベーター連携機能を実装するとともに、空間IDを用いた施設情報取得機能や侵入禁止エリアの設定機能を実装。また、自社データウェアハウスシステムとの連携による位置情報共有機能を構築し、複数モビリティの協調運行を実現。実証後、同時期にRFAにて議論が進められていたリソース管理サーバーに関する実験を社内で実施し、実証内容と併せてROSCon JP 2024にて登壇発表。",
          tech: ["ROS1 Noetic", "Open-RMF", "RFA", "REST API", "空間ID", "Python"],
          videos: [
            {
              url: "/assets/hic_elv_mediation.mp4",
              caption: "共通仕様に基づく異ベンダーロボット間の経路調停の様子",
            },
            {
              url: "/assets/hic_node_edge_mediation.mp4",
              caption: "共通トポロジカル・グラフ情報に基づくノード専有の様子",
            },
          ],
          links: [
            {
              label: "複数のモビリティの協調運行に関する実証調査研究への参加（デジタル庁）",
              url: "https://www.ros-sier.com/case/demonstrations-and-projects/haneda",
            },
            {
              label: "複数のモビリティの協調運行に関する実証調査研究 最終報告書（概要版）",
              url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/9f4e70e2-2335-4181-8293-258c12549d31/8d42a535/20240508_policies_mobility_report_01.pdf",
            },
            {
              label: "ROSCon JP 2024 発表資料",
              url: "https://roscon.ros.org/jp/2024/presentations/03.pdf",
            },
          ],
        },
        {
          name: "空間IDを活用したロボット走行実験",
          period: "2022年 〜 2023年",
          role: "ソフトウェアエンジニア / ハードウェアエンジニア",
          description:
            "デジタル庁主導の「デジタルツイン構築に関する調査研究」の一環として実施された、3次元空間IDデータを活用したロボット走行実証実験に参画。実証実験向けロボット仕様の策定や空間IDの活用例の提案に携わるとともに、既存の内製ロボットをベースに実証用ロボット機体の設計・開発。空間IDを活用したロボット走行方式を設計し、空間IDに基づくデータベース設計および走行プログラムを実装。また、省庁関係者向けにロボット走行デモンストレーションを実施し、空間IDを活用した新しいロボット制御手法の有効性を実証。このとき、実験の機会を活用して施設のBIMデータを活用した自己位置推定用地図作成を実施。地図作成の効率化の実現と空間ID導出に必要な緯度経度情報の取得に成功。",
          tech: ["ROS1 Noetic", "REST API", "空間ID", "Python", "C++", "Inventor CAD"],
          images: [
            {
              url: "/assets/cube_delivery_1.jpg",
            },
            {
              url: "/assets/cube_delivery_3.jpg",
            },
            {
              url: "/assets/spatial_id_poc.png",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=h7Y9QNBfTUg",
          links: [
            {
              label:
                "ソフトバンクニュース「空間IDを活用しロボットやドローンの移動を最適化。空間情報の整備に向けた実証実験」",
              url: "https://www.softbank.jp/sbnews/entry/20231101_01",
            },
            {
              label:
                "空間IDを活用した、配送ロボットとARナビゲーションのデータ共有に関する実証実験を実施",
              url: "https://www.softbank.jp/corp/news/press/sbkk/2023/20230425_01/",
            },
            {
              label: "デジタルツイン構築に関する調査研究 調査報告書",
              url: "https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/9f4e70e2-2335-4181-8293-258c12549d31/38cba97c/20230426_policies_mobility_report_01.pdf",
            },
          ],
        },
        {
          name: "NEDO屋外配送ロボットプロジェクト",
          period: "2020年 〜 2021年",
          role: "ソフトウェアエンジニア",
          description:
            "NEDOの「自動走行ロボットを活用した新たな配送サービス実現に向けた技術開発事業」（当社実施案件）において、屋外走行対応ROSロボットのソフトウェア開発全般を担当。OSS自動運転ソフトウェアであるAutowareを用いた屋外ナビゲーション機能を構築し、自動走行機能をロボットシステムに統合。特筆すべき取り組みとして、日本信号株式会社が提供する信号情報通信ハードウェアと連携し、信号状態を認識する機能を実装することで、日本初となる信号機と連携した屋外配送ロボットの走行を実現。また、東京ポートシティ竹芝において、屋内外走行を考慮した地図切り替え機能を設計・実装し、複数フロアに対応した配送システムを開発。",
          tech: ["ROS1 Noetic", "Autoware", "MQTT", "Python", "C++"],
          images: [
            {
              url: "/assets/nedo_traffic.png",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=CyYP8fSry-I&t=45s",
          links: [
            {
              label: "日本初、自動走行ロボットと信号機の連携による屋外配送に成功",
              url: "https://www.softbank.jp/corp/news/press/sbkk/2021/20210615_01/",
            },
          ],
        },
        {
          name: "屋内配送ロボットのエレベーター連携実証",
          period: "2019年 〜 2020年",
          role: "ソフトウェアエンジニア",
          description:
            "総務省の「令和元年度 IoTの安心・安全かつ適正な利用環境の構築に係る委託事業」として実施された、自律走行ロボットとエレベーター連携による屋内配送実証において、複数フロアにまたがる移動配送システムのソフトウェア開発全般を担当。複数フロア対応の施設情報管理フォーマットを設計し、複数地図切り替え機能を設計・実装することで、異なるフロア間でのシームレスな移動を実現。自社の研究開発ロボット機体にSMACHベースのアプリを初めて導入し、ベンダー仕様に基づくMQTT通信によるエレベーター連携機能を実装。後続の東京ポートシティ竹芝におけるロボット実証では、ビル設備管理システム「ビルフィーユ（三菱電機株式会社提供）」とのROS連携機能を構築。また、長期に亘る警備巡回運用を想定したGoogleカレンダー連携機能などを設計・実装。",
          tech: ["ROS1 Melodic", "MQTT", "Python", "C++"],
          videos: [
            {
              url: "/assets/elevator_demo_1.mp4",
              caption: "東京ポートシティ竹芝におけるエレベーター連携の例",
            },
          ],
          youtube: "https://www.youtube.com/watch?v=W5sd88Pn8lU",
          links: [
            {
              label:
                "ソフトバンクニュース「エレベーターの乗降もらくらくクリア！ 自律走行ロボット「Cuboidくん」を活用したサービスの実用化に向けてデモを実施」",
              url: "https://www.softbank.jp/sbnews/entry/20200109_01?adid=sbns_m_s_s_o_1_2427_20200220_ytoc_",
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "東京大学 情報理工学系研究科 知能機械情報学専攻",
      period: "2017年4月 〜 2019年3月",
      degree: "修士（情報理工学）",
      note: "情報システム工学研究室にてトヨタの生活支援ロボット「HSR」を用いてロボカップDSPLリーグやWRSのチャレンジに参加。修士論文では深層学習による物体・人物認識機能の開発と、Dialogflowを活用した音声対話システムを実装。認識・対話・行動計画を統合し、複数の日常支援タスクを自律的に遂行するシステムを構築。",
    },
    {
      school: "東京大学 工学部 電子情報工学科",
      period: "2013年4月 〜 2017年3月",
      degree: "学士（工学）",
      note: "駒場キャンパス時代は英語劇サークルにて役者や大道具作りに打ち込む。本郷キャンパスに移ってからは学科の学園祭企画のリーダーを務めた他、伊庭斉志教授・長谷川禎彦准教授のもとでAIや数理モデルについて学ぶ。",
    },
    {
      school: "（愛知県）私立東海高等学校",
      period: "2010年4月 〜 2013年3月",
      note: "中学時代より剣道部に所属、剣道二段を取得。文化祭の実行委員を務める。",
    },
  ],
  certifications: [
    {
      name: "第三種電気主任技術者",
      issuer: "経済産業省",
      date: "2025年6月",
    },
    {
      name: "E資格（JDLA Deep Learning for ENGINEER）",
      issuer: "JDLA（一般社団法人 日本ディープラーニング協会）",
      date: "2025年2月",
    },
    {
      name: "第一級陸上無線技術士",
      issuer: "総務省",
      date: "2022年9月",
    },
    {
      name: "エンベデッドシステムスペシャリスト試験",
      issuer: "IPA（情報処理推進機構）",
      date: "2020年12月",
    },
    {
      name: "TOEFL iBT 106/120",
      issuer: "ETS（Educational Testing Service）",
      date: "2016年8月",
    },
    {
      name: "応用情報技術者試験",
      issuer: "IPA（情報処理推進機構）",
      date: "2015年12月",
    },
  ],
};
