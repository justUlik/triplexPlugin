// BEGIN GENERATED EDITORIAL POLICY
// Edit v2/knowledge/editorial-policy.json, then run node v2/scripts/sync-editorial-policy.mjs.
const editorialPolicy = {
  "version": "2026-11-23.1",
  "defaultProfile": "triplex",
  "sources": [
    {
      "id": "triplex",
      "title": "Текстовый стандарт СберБизнес / Triplex Super Text",
      "version": "7.3.2",
      "checkedOn": "2026-11-23",
      "url": "https://triplex-design.ru/next/ru/Super/Text/release%20notes",
      "limitations": "Страница «Тексты ошибок» находится на доработке и ссылается на внутренний каталог системных ошибок. Этот каталог не прочитан; стандартные согласованные ошибки не выдумывать. Выдержки основаны на текстовых узлах публичных разделов, а не на содержимом изображений."
    },
    {
      "id": "sbol",
      "title": "Редполитика СберБанк Онлайн",
      "version": "v31 по имени файла; экспорт 2025-12-18",
      "file": "Редполитика_СберБанк_Онлайн_v31_20251218_235603.pdf",
      "sha256": "706bb29509dff8c41d34470c2de144eb67e99437895db3ba9a4a6e19a5e37f6a",
      "pages": 78,
      "limitations": "Внутренние ссылки из PDF не открывались. Самостоятельный промпт на страницах 49–51 рассматривается как материал по редактированию, а не инструкция менять протокол ответов плагина."
    }
  ],
  "precedence": "Это справочник редактирования клиентских текстов. Сохраняй JSON-схему текущего запроса, доступные компоненты и бизнес-логику. Точные тексты из аналитики и вручную подтверждённые тексты не переписывай без просьбы пользователя. Для оформления новых текстов явно заданные пользователем правила канала важнее справочника; иначе применяй выбранный профиль; не смешивай противоречащие канальные правила.",
  "profiles": {
    "triplex": "Основной профиль для текущих форм Triplex / СберБизнес. Редполитика СБОЛ дополняет его общими принципами; канальное оформление берётся из Triplex.",
    "sbol": "Для явно указанного продукта СберБанк Онлайн / СБОЛ. Его оформление имеет приоритет над канальными правилами Triplex."
  },
  "rules": [
    {
      "id": "plain-language",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Пиши просто и по делу: без канцелярита, штампов, причастных и деепричастных оборотов. Предпочитай короткие предложения и глаголы.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/вредные слова",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/вредные слова"
        },
        {
          "id": "sbol",
          "pages": [
            7,
            8,
            47,
            50
          ]
        }
      ]
    },
    {
      "id": "tone",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Обращайся на «вы» со строчной буквы. Тон спокойный, вежливый и гендерно-нейтральный: без капслока, давления, обвинений, шуток в ошибках и лишних восклицаний.",
      "sources": [
        {
          "id": "triplex",
          "section": "редполитика/с клиентом на «вы»",
          "url": "https://triplex-design.ru/next/ru/Super/Text/редполитика/с клиентом на «вы»"
        },
        {
          "id": "sbol",
          "pages": [
            12,
            42,
            43,
            50
          ]
        }
      ]
    },
    {
      "id": "letter-yo",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Ставь «ё» во всех словах, где она требуется.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/буква «ё»",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/буква «ё»"
        },
        {
          "id": "sbol",
          "pages": [
            33,
            50
          ]
        }
      ]
    },
    {
      "id": "truth",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Не выдумывай сроки, суммы, ограничения, причины ошибок и гарантии. Не обещай неподтверждённую помощь поддержки или результат следующего шага.",
      "sources": [
        {
          "id": "triplex",
          "section": "редполитика/границы",
          "url": "https://triplex-design.ru/next/ru/Super/Text/редполитика/границы"
        },
        {
          "id": "sbol",
          "pages": [
            9,
            47,
            62,
            63
          ]
        }
      ]
    },
    {
      "id": "consistent-screen",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Используй единые названия, подписи и формулировки во всём сценарии; не повторяй одно и то же в заголовке и описании.",
      "sources": [
        {
          "id": "triplex",
          "section": "компоненты интерфейса/статус",
          "url": "https://triplex-design.ru/next/ru/Super/Text/компоненты интерфейса/статус"
        },
        {
          "id": "sbol",
          "pages": [
            9,
            44,
            45,
            62
          ]
        }
      ]
    },
    {
      "id": "no-bank-pronouns",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Не добавляй лишние «мы», «наш», «свой»: называй объект или действие прямо. Избегай двусмысленных местоимений.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/вредные слова",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/вредные слова"
        },
        {
          "id": "sbol",
          "pages": [
            35,
            36,
            50
          ]
        }
      ]
    },
    {
      "id": "numbers",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Используй запятую в дробной части. Суммы показывай цифрами, разряды больших чисел разделяй неразрывными пробелами; число и валюту не разрывай переносом.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/суммы",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/суммы"
        },
        {
          "id": "sbol",
          "pages": [
            13,
            24,
            30,
            51
          ]
        }
      ]
    },
    {
      "id": "quotes",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Для русских названий используй «ёлочки». Названия латиницей не заключай в кавычки. Сохраняй точные названия продуктов.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/кавычки",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/кавычки"
        },
        {
          "id": "sbol",
          "pages": [
            16,
            37,
            51
          ]
        }
      ]
    },
    {
      "id": "slash",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "В обычном тексте заменяй слэш на «и» или «или» по смыслу; не меняй разделители в номерах документов и обязательных форматах.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/косая черта",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/косая черта"
        },
        {
          "id": "sbol",
          "pages": [
            18,
            51
          ]
        }
      ]
    },
    {
      "id": "no-success-adverb",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "copy",
        "states"
      ],
      "rule": "В статусах и уведомлениях не добавляй «успешно»: достаточно конкретного результата.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/вредные слова",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/вредные слова"
        }
      ]
    },
    {
      "id": "labels-placeholders",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy"
      ],
      "rule": "Подписи называют данные поля. Для одинаковых полей используй одинаковые placeholders; подсказки делай краткими и понятными без лишнего контекста.",
      "sources": [
        {
          "id": "triplex",
          "section": "компоненты интерфейса/поля ввода и выбора",
          "url": "https://triplex-design.ru/next/ru/Super/Text/компоненты интерфейса/поля ввода и выбора"
        },
        {
          "id": "sbol",
          "pages": [
            44,
            45
          ]
        }
      ]
    },
    {
      "id": "abbreviations",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Не вводи самодельные сокращения. Сохраняй общеупотребительные банковские термины ИНН, КПП, БИК, НДС и понятные единицы.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/сокращения",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/сокращения"
        },
        {
          "id": "sbol",
          "pages": [
            32,
            33
          ]
        }
      ]
    },
    {
      "id": "error-action",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "states"
      ],
      "rule": "Ошибка кратко объясняет, что произошло и что можно сделать дальше. Не обвиняй клиента, не дублируй заголовок и не ограничивайся «Что-то пошло не так». Советуй только доступное в сценарии действие.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            61,
            62,
            63,
            65,
            71
          ]
        }
      ]
    },
    {
      "id": "validation",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "states"
      ],
      "rule": "В Description поля дай конкретное исправление: что ввести, выбрать или проверить. Для отсутствующего значения достаточно короткого действия с названием данных; для формата или диапазона используй только подтверждённое правило.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            61,
            62,
            63,
            64
          ]
        }
      ]
    },
    {
      "id": "service-error",
      "profiles": [
        "triplex",
        "sbol"
      ],
      "scopes": [
        "states"
      ],
      "rule": "При сбое сервиса уместна вежливая просьба и краткое извинение. Не называй произвольное время восстановления и не обещай, что повтор точно поможет.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            61,
            62,
            63,
            71
          ]
        }
      ]
    },
    {
      "id": "triplex-percent",
      "profiles": [
        "triplex"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Процент отделяй от числа пробелом, например 10 %. Не переноси знак на другую строку.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/пробел",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/пробел"
        }
      ]
    },
    {
      "id": "triplex-period",
      "profiles": [
        "triplex"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Без точки: заголовки, подписи, кнопки, табличные названия и пояснения без действия/состояния. Полные предложения в ошибках и подсказках заканчивай точкой.",
      "sources": [
        {
          "id": "triplex",
          "section": "главное о текстах/точки",
          "url": "https://triplex-design.ru/next/ru/Super/Text/главное о текстах/точки"
        }
      ]
    },
    {
      "id": "triplex-hints-period",
      "profiles": [
        "triplex"
      ],
      "scopes": [
        "copy",
        "states"
      ],
      "rule": "Для поясняющего словосочетания в подсказке точка не нужна; для предложения с действием или состоянием нужна.",
      "sources": [
        {
          "id": "triplex",
          "section": "компоненты интерфейса/подсказки",
          "url": "https://triplex-design.ru/next/ru/Super/Text/компоненты интерфейса/подсказки"
        }
      ]
    },
    {
      "id": "triplex-terms",
      "profiles": [
        "triplex"
      ],
      "scopes": [
        "catalog",
        "copy"
      ],
      "rule": "Для СберБизнес: название поля «Эл. почта», в пояснении полная форма «электронная почта». Интернет, веб- и онлайн пиши кириллицей.",
      "sources": [
        {
          "id": "triplex",
          "section": "редполитика/кириллица и латиница",
          "url": "https://triplex-design.ru/next/ru/Super/Text/редполитика/кириллица и латиница"
        }
      ]
    },
    {
      "id": "sbol-percent",
      "profiles": [
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Процент не отделяй пробелом: 10%. Не применяй противоположное правило Triplex к СБОЛ.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            17,
            51
          ]
        }
      ]
    },
    {
      "id": "sbol-period",
      "profiles": [
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Не ставь точку в конце последнего или единственного предложения интерфейсного текста, пунктов списка, заголовков и кнопок. Между предложениями точки сохраняй.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            13,
            14,
            15,
            51
          ]
        }
      ]
    },
    {
      "id": "sbol-terms",
      "profiles": [
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Пиши «СберБанк», «СберБанк Онлайн» без кавычек; «счёт», «кешбэк», «код из СМС», «деньги» вместо «денежные средства», конкретный платёж/перевод вместо общего «операция».",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            37,
            52,
            53,
            54
          ]
        }
      ]
    },
    {
      "id": "sbol-format",
      "profiles": [
        "sbol"
      ],
      "scopes": [
        "catalog",
        "copy",
        "states"
      ],
      "rule": "Время — 24-часовой формат 08:30; дату показывай однозначно, например 3 апреля 2024 г. Не добавляй выдуманный часовой пояс.",
      "sources": [
        {
          "id": "sbol",
          "pages": [
            19,
            21,
            51
          ]
        }
      ]
    }
  ]
};
// END GENERATED EDITORIAL POLICY

// BEGIN GENERATED TRIPLEX KNOWLEDGE
// Edit knowledge/triplex-components.json, then run node scripts/sync-triplex-knowledge.mjs.
const triplexKnowledge = {
  "version": "2026-11-21",
  "libraryVersion": "1.55.0",
  "source": "https://triplex-design.ru/next/ru/Web",
  "description": "Краткие описания назначения и отличий, составленные по официальному Storybook и AI-документации. Имена в Pixso сопоставляются отдельно; наличие в справочнике не означает наличие экземпляра в библиотеке.",
  "components": [
    {
      "name": "AlertContext",
      "aliases": [],
      "use": "Короткое пояснение или предупреждение рядом с конкретным элементом, без отдельного блока.",
      "avoid": "Для заметного сообщения процесса нужен AlertProcess.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Alert/AlertContext-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-alerts-alertcontext--docs"
    },
    {
      "name": "AlertProcess",
      "aliases": [],
      "use": "Выделенный блок сообщения о процессе с подробностями; может содержать раскрываемый текст.",
      "avoid": "Для короткой подписи — AlertContext; всплывающего уведомления — Notification.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Alert/AlertProcess-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-alerts-alertprocess--docs"
    },
    {
      "name": "Amount",
      "aliases": [],
      "use": "Показ готовой денежной суммы с валютой и разделением разрядов: баланс, итог, сумма в таблице.",
      "avoid": "Не ввод. Для редактирования суммы нужен AmountField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Amount/Amount-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-amount--docs"
    },
    {
      "name": "Avatar",
      "aliases": [],
      "use": "Изображение, инициалы или символ пользователя либо организации в стандартном контейнере.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Avatar/Avatar-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-avatar--docs"
    },
    {
      "name": "Badge",
      "aliases": [],
      "use": "Небольшая метка или счётчик рядом с объектом; также индикатор-точка.",
      "avoid": "Для семантического статуса процесса — MarkerStatus.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Badge/Badge-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-badge--docs"
    },
    {
      "name": "Body",
      "aliases": [],
      "use": "Нейтральный контейнер основного содержимого без оформления страницы.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Body/Body-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-body--docs"
    },
    {
      "name": "Button",
      "aliases": [],
      "use": "Запуск одиночного действия.",
      "avoid": "Запрещён к предложению по правилу проекта.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Button/Button-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-buttons-button--docs"
    },
    {
      "name": "ButtonDropdown",
      "aliases": [],
      "use": "Кнопка с раскрывающимся списком действий.",
      "avoid": "Запрещён к предложению по правилу проекта.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Button/ButtonDropdown-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-buttons-buttondropdown--docs"
    },
    {
      "name": "ButtonDropdownExtended",
      "aliases": [],
      "use": "Основа кнопки с произвольным раскрывающимся содержимым.",
      "avoid": "Запрещён к предложению по правилу проекта.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Button/ButtonDropdownExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-buttons-buttondropdownextended--docs"
    },
    {
      "name": "ButtonIcon",
      "aliases": [],
      "use": "Кнопка действия, обозначенного иконкой.",
      "avoid": "Запрещён к предложению по правилу проекта.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Button/ButtonIcon-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-buttons-buttonicon--docs"
    },
    {
      "name": "CardAction",
      "aliases": [],
      "use": "Карточка, которую выбирают или нажимают: тариф, продукт, способ оплаты.",
      "avoid": "Не заменять ею запрещённую кнопку; для информации — CardStatic.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Card/CardAction-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-cards-cardaction--docs"
    },
    {
      "name": "CardStatic",
      "aliases": [],
      "use": "Неинтерактивная карточка для группировки сведений об объекте.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Card/CardStatic-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-cards-cardstatic--docs"
    },
    {
      "name": "Carousel",
      "aliases": [],
      "use": "Прокручиваемая последовательность слайдов, в том числе разного размера.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Carousel/Carousel-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-carousel--docs"
    },
    {
      "name": "CarouselExtended",
      "aliases": [],
      "use": "Основа горизонтальной карусели с настраиваемыми элементами управления.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/CarouselExtended/CarouselExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-carouselextended--docs"
    },
    {
      "name": "Checkbox",
      "aliases": [
        "чекбокс"
      ],
      "use": "Независимый выбор да/нет, согласие или отдельная опция.",
      "avoid": "Для одного взаимоисключающего выбора — Radio.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Checkbox/Checkbox-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-checkboxes-checkbox--docs"
    },
    {
      "name": "CheckboxXGroup",
      "aliases": [],
      "use": "Группа связанных чекбоксов по горизонтали.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Checkbox/CheckboxXGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-checkboxes-checkboxxgroup--docs"
    },
    {
      "name": "CheckboxYGroup",
      "aliases": [],
      "use": "Группа связанных чекбоксов по вертикали.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Checkbox/CheckboxYGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-checkboxes-checkboxygroup--docs"
    },
    {
      "name": "CheckboxTree",
      "aliases": [],
      "use": "Множественный выбор в иерархии с согласованным выбором родителей и потомков.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/CheckboxTree/CheckboxTree-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-checkboxtree--docs"
    },
    {
      "name": "CheckboxTreeExtended",
      "aliases": [],
      "use": "Настраиваемое дерево чекбоксов для своей логики выбора и содержимого узлов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/CheckboxTreeExtended/CheckboxTreeExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-checkboxtreeextended--docs"
    },
    {
      "name": "Chip",
      "aliases": [],
      "use": "Компактный элемент фильтра или выбора в ряду чипсов.",
      "avoid": "Не обходить запрет кнопок чипсом-действием.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/Chip-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chip--docs"
    },
    {
      "name": "ChipDatePicker",
      "aliases": [],
      "use": "Компактный фильтр по конкретной дате; выбор отображается на чипсе.",
      "avoid": "Для поля даты в форме — DateField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipDatePicker-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipdatepicker--docs"
    },
    {
      "name": "ChipGroup",
      "aliases": [],
      "use": "Группа чипсов с общими отступами и переносом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ChipGroup/ChipGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipgroup--docs"
    },
    {
      "name": "ChipIcon",
      "aliases": [],
      "use": "Чип с иконкой вместо обычного текстового содержимого.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/stories/Chips/ChipIcon.stories.tsx",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipicon--docs"
    },
    {
      "name": "ChipMonthYearPicker",
      "aliases": [],
      "use": "Фильтр по месяцу и году, без выбора дня.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipMonthYearPicker-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipmonthyearpicker--docs"
    },
    {
      "name": "ChipMultiselect",
      "aliases": [],
      "use": "Компактный фильтр с выбором нескольких значений и счётчиком выбранного.",
      "avoid": "Для полноценного поля формы — MultiselectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipMultiselect-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipmultiselect--docs"
    },
    {
      "name": "ChipOptions",
      "aliases": [],
      "use": "Чип настроек фильтра с количеством выбранных опций и сбросом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipOptions-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipoptions--docs"
    },
    {
      "name": "ChipSelect",
      "aliases": [],
      "use": "Компактный фильтр с выбором одного значения.",
      "avoid": "Для поля формы — SelectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipSelect-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipselect--docs"
    },
    {
      "name": "ChipSort",
      "aliases": [],
      "use": "Компактный выбор сортировки с обозначением иконкой.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipSort-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipsort--docs"
    },
    {
      "name": "ChipSuggest",
      "aliases": [],
      "use": "Фильтр с поиском по длинному списку вариантов.",
      "avoid": "Для поля формы с подсказками — SuggestField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Chip/ChipSuggest-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-chips-chipsuggest--docs"
    },
    {
      "name": "Col",
      "aliases": [],
      "use": "Колонка адаптивной сетки; используется вместе с Row.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Col/Col-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-col--docs"
    },
    {
      "name": "CollapsibleTree",
      "aliases": [],
      "use": "Готовое дерево с раскрываемыми ветками и стандартным оформлением узлов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/CollapsibleTree/CollapsibleTree-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-collapsibletree--docs"
    },
    {
      "name": "CollapsibleTreeExtended",
      "aliases": [],
      "use": "Дерево с настраиваемым содержимым и логикой раскрытия узлов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/CollapsibleTreeExtended/CollapsibleTreeExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-collapsibletreeextended--docs"
    },
    {
      "name": "ComposedKeyDownListener",
      "aliases": [],
      "use": "Служебная обработка нескольких сочетаний клавиш; визуального компонента нет.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/KeyDownListener/ComposedKeyDownListener-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-composedkeydownlistener--docs"
    },
    {
      "name": "Confirm",
      "aliases": [],
      "use": "Подтверждение потенциальной потери данных поверх текущего содержимого.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Confirm/Confirm-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-confirm--docs"
    },
    {
      "name": "Calendar",
      "aliases": [],
      "use": "Встроенная календарная сетка для выбора даты.",
      "avoid": "Для обычного поля даты — DateField, а не отдельный Calendar.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Calendar/Calendar-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-calendar--docs"
    },
    {
      "name": "DateField",
      "aliases": [
        "DatePicker",
        "Date Picker",
        "поле даты"
      ],
      "use": "Поле конкретной даты: ввод с клавиатуры и выбор в календаре.",
      "avoid": "Не для месяца без дня или периода — MonthYearField / DateRange.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/DateField/DateField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-datefield--docs"
    },
    {
      "name": "DatePickerExtended",
      "aliases": [],
      "use": "Основа выбора даты с собственным триггером и календарным выпадающим блоком.",
      "avoid": "Для готового поля — DateField; это не универсальная замена ему.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/DatePickerExtended/DatePickerExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-datepickerextended--docs"
    },
    {
      "name": "DateRange",
      "aliases": [],
      "use": "Период из начальной и конечной дат с возможностью сдвигать период.",
      "avoid": "Не заменять одним TextField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/DateRange/DateRange-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-daterange--docs"
    },
    {
      "name": "MonthYearField",
      "aliases": [],
      "use": "Выбор месяца и года через календарь без конкретного дня.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MonthYearField/MonthYearField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-monthyearfield--docs"
    },
    {
      "name": "MonthYearRange",
      "aliases": [],
      "use": "Начало и конец периода с точностью до месяца.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MonthYearRange/MonthYearRange-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-date-components-monthyearrange--docs"
    },
    {
      "name": "Divider",
      "aliases": [],
      "use": "Видимая линия между смысловыми частями интерфейса.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Divider/Divider-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-divider--docs"
    },
    {
      "name": "DocumentNumberEdit",
      "aliases": [],
      "use": "Компактное редактирование номера документа на месте, например в заголовке.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/DocumentNumberEdit/DocumentNumberEdit-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-documentnumberedit--docs"
    },
    {
      "name": "Dropdown",
      "aliases": [],
      "use": "Всплывающий блок, связанный с триггером; основа для разных видов содержимого.",
      "avoid": "Для готового выбора одного значения — SelectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Dropdown/Dropdown-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-dropdown--docs"
    },
    {
      "name": "Ellipsis",
      "aliases": [],
      "use": "Ограничение длинного текста заданным количеством строк с многоточием.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Ellipsis/Ellipsis-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-ellipsis--docs"
    },
    {
      "name": "EmptyView",
      "aliases": [],
      "use": "Заглушка для области, в которой нет данных.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/EmptyView/EmptyView-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-emptyview--docs"
    },
    {
      "name": "ExpandAnimation",
      "aliases": [],
      "use": "Служебная анимация раскрытия блока, не самостоятельный контент.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ExpandAnimation/ExpandAnimation-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-expandanimation--docs"
    },
    {
      "name": "Footer",
      "aliases": [],
      "use": "Нижняя область контейнера с информацией и действиями.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Footer/Footer-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-footer--docs"
    },
    {
      "name": "FormField",
      "aliases": [],
      "use": "Основа для сборки собственного поля из подписи, ввода и дополнительных частей.",
      "avoid": "Сначала искать готовый специализированный Field.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/FormField/FormField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-formfield--docs"
    },
    {
      "name": "FormGroup",
      "aliases": [],
      "use": "Объединение поля, подсказок и описания в одну смысловую группу.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/FormGroup/FormGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-formgroup--docs"
    },
    {
      "name": "Gap",
      "aliases": [],
      "use": "Вертикальный промежуток между блоками.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Gap/Gap-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-gap--docs"
    },
    {
      "name": "Header",
      "aliases": [],
      "use": "Верхняя область контейнера с заголовком и дополнительным содержимым.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Header/Header-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-header--docs"
    },
    {
      "name": "HelpBox",
      "aliases": [],
      "use": "Контекстная справка по иконке вопроса возле элемента.",
      "avoid": "Не для сложной формы во всплывающем окне.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/HelpBox/HelpBox-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-helpbox--docs"
    },
    {
      "name": "ImageGallery",
      "aliases": [],
      "use": "Готовый просмотр набора изображений.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ImageGallery/ImageGallery-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-imagegallery--docs"
    },
    {
      "name": "ImageGalleryExtended",
      "aliases": [],
      "use": "Галерея изображений с настраиваемой композицией.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ImageGalleryExtended/ImageGalleryExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-imagegalleryextended--docs"
    },
    {
      "name": "Island",
      "aliases": [],
      "use": "Контейнер-карточка для смыслового блока страницы.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Island/Island-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-island--docs"
    },
    {
      "name": "IslandAccordion",
      "aliases": [],
      "use": "Набор раскрываемых секций, в том числе для последовательных шагов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/IslandAccordion/IslandAccordion-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-islandaccordion--docs"
    },
    {
      "name": "IslandWidget",
      "aliases": [],
      "use": "Виджет с шапкой, содержимым и подвалом; в адаптиве содержимое сворачивается.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/IslandWidget/IslandWidget-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-islandwidget--docs"
    },
    {
      "name": "KeyDownListener",
      "aliases": [],
      "use": "Служебный обработчик клавиатуры без собственного интерфейса.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/KeyDownListener/KeyDownListener-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-keydownlistener--docs"
    },
    {
      "name": "LightBox",
      "aliases": [],
      "use": "Контейнер отдельного экрана поверх приложения.",
      "avoid": "Плагин уже ставит LightBox; не вставлять второй внутрь его BodyPage.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/LightBox/LightBox-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-lightbox-lightbox--docs"
    },
    {
      "name": "Link",
      "aliases": [],
      "use": "Переход к другому ресурсу или разделу.",
      "avoid": "Не использовать как замену запрещённой кнопке действия.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Link/Link-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-link--docs"
    },
    {
      "name": "List",
      "aliases": [],
      "use": "Список объектов с оформлением строк.",
      "avoid": "Для колонок и сравнения записей — TableBasic.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/List/List-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-list-list--docs"
    },
    {
      "name": "ListItem",
      "aliases": [],
      "use": "Одна строка списка с содержимым и дополнительными элементами.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/List/ListItem-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-list-listitem--docs"
    },
    {
      "name": "ListItemControls",
      "aliases": [],
      "use": "Область действий строки списка.",
      "avoid": "Не добавлять запрещённые кнопки.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/stories/List/ListItemControls.stories.tsx",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-list-listitemcontrols--docs"
    },
    {
      "name": "ListMaster",
      "aliases": [],
      "use": "Компоновка списка с фильтрами, выбором записей, шапкой и подвалом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ListMaster/ListMaster-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-list-listmaster--docs"
    },
    {
      "name": "ListTableItem",
      "aliases": [],
      "use": "Строка списка с табличным расположением содержимого.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/List/ListTableItem-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-list-listtableitem--docs"
    },
    {
      "name": "LoaderMiddle",
      "aliases": [],
      "use": "Индикатор ожидания среднего размера внутри области.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Loader/LoaderMiddle-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-loaders-loadermiddle--docs"
    },
    {
      "name": "LoaderScreen",
      "aliases": [],
      "use": "Индикатор загрузки для целого экрана.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/LoaderScreen/LoaderScreen-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-loaders-loaderscreen--docs"
    },
    {
      "name": "LoaderSmall",
      "aliases": [],
      "use": "Небольшой индикатор ожидания рядом с локальным элементом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Loader/LoaderSmall-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-loaders-loadersmall--docs"
    },
    {
      "name": "Skeleton",
      "aliases": [],
      "use": "Временные контуры содержимого на время загрузки.",
      "avoid": "Не заменяет готовые данные.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Skeleton/Skeleton-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-loaders-skeleton--docs"
    },
    {
      "name": "Marker",
      "aliases": [],
      "use": "Цветная точка, обозначающая статус объекта.",
      "avoid": "Для статуса с текстом — MarkerStatus.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Marker/Marker-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-marker--docs"
    },
    {
      "name": "MarkerStatus",
      "aliases": [],
      "use": "Статус объекта с цветным маркером и текстовым пояснением.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MarkerStatus/MarkerStatus-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-markerstatus--docs"
    },
    {
      "name": "MasterTable",
      "aliases": [],
      "use": "Общая компоновка таблицы с фильтрами, настройками, подвалом и пагинацией.",
      "avoid": "Сами строки и колонки — TableBasic; не обычное поле ввода.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Table/MasterTable-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-mastertable--docs"
    },
    {
      "name": "MediaWidth",
      "aliases": [],
      "use": "Служебное переключение содержимого по ширине; нет самостоятельного визуального элемента.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MediaWidth/MediaWidth-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-mediawidth--docs"
    },
    {
      "name": "MobileView",
      "aliases": [],
      "use": "Служебный выбор мобильного представления, не компонент макета.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MobileView/MobileView-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-mobileview--docs"
    },
    {
      "name": "ModalWindow",
      "aliases": [],
      "use": "Модальное окно для отдельной краткой задачи или сообщения.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ModalWindow/ModalWindow-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-modalwindow--docs"
    },
    {
      "name": "MultiselectField",
      "aliases": [
        "Multiselect",
        "Multi Select"
      ],
      "use": "Поле выбора нескольких значений из списка с отображением выбранных тегами.",
      "avoid": "SelectField выбирает одно; SuggestField нужен для поиска с подсказками.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MultiselectField/MultiselectField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-multiselectfield--docs"
    },
    {
      "name": "Notification",
      "aliases": [],
      "use": "Всплывающее уведомление поверх основного интерфейса.",
      "avoid": "Для сообщения в содержимом — AlertProcess.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Notification/Notification-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-notification--docs"
    },
    {
      "name": "NotificationGrouped",
      "aliases": [],
      "use": "Визуальное объединение нескольких уведомлений в стопку.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Notification/NotificationGrouped-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-notificationgrouped--docs"
    },
    {
      "name": "NumberField",
      "aliases": [
        "Number Input"
      ],
      "use": "Ввод целого или дробного числа: количество, срок, числовой параметр.",
      "avoid": "Для денег — AmountField; идентификатор с маской — MaskedField; не применять форматирование суммы к количеству.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/NumberField/NumberField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-numberfield--docs"
    },
    {
      "name": "OrderedList",
      "aliases": [],
      "use": "Нумерованный текстовый список: последовательность или инструкция.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/OrderedList/OrderedList-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-orderedlist--docs"
    },
    {
      "name": "Overlay",
      "aliases": [],
      "use": "Слой, перекрывающий содержимое интерфейса.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Overlay/Overlay-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-overlay--docs"
    },
    {
      "name": "Page",
      "aliases": [],
      "use": "Компоновка страницы из шапки, тела и подвала.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Page/Page-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-page--docs"
    },
    {
      "name": "BodyPage",
      "aliases": [],
      "use": "Основная область страницы с оформлением и отступами.",
      "avoid": "Внутри установленного LightBox уже есть BodyPage — не дублировать.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Page/BodyPage-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-page-bodypage--docs"
    },
    {
      "name": "FooterPage",
      "aliases": [],
      "use": "Подвал страницы; не отдельное поле формы.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Page/FooterPage-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-page-footerpage--docs"
    },
    {
      "name": "HeaderPage",
      "aliases": [],
      "use": "Шапка страницы; не отдельное поле формы.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Page/HeaderPage-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-page-headerpage--docs"
    },
    {
      "name": "PageIndicators",
      "aliases": [],
      "use": "Компактные индикаторы текущей страницы или слайда.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/PageIndicators/PageIndicators-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-pageindicators--docs"
    },
    {
      "name": "Pagination",
      "aliases": [],
      "use": "Готовое переключение страниц набора данных с настройкой размера страницы.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Pagination/Pagination-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-pagination--docs"
    },
    {
      "name": "PaginationExtended",
      "aliases": [],
      "use": "Настраиваемая композиция элементов пагинации.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Pagination/PaginationExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-pagination-paginationextended--docs"
    },
    {
      "name": "PaginationNavigationExtended",
      "aliases": [],
      "use": "Контейнер для собственного набора элементов навигации пагинации.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/stories/Pagination/PaginationNavigationExtended.stories.tsx",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-pagination-paginationnavigationextended--docs"
    },
    {
      "name": "Portal",
      "aliases": [],
      "use": "Служебный перенос содержимого в другую часть DOM; не визуальный элемент макета.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Portal/Portal-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-portal--docs"
    },
    {
      "name": "Puller",
      "aliases": [],
      "use": "Выдвижная панель-шторка для отдельного содержимого.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Puller/Puller-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-puller--docs"
    },
    {
      "name": "Radio",
      "aliases": [
        "радиокнопка"
      ],
      "use": "Один выбор из нескольких видимых взаимоисключающих вариантов.",
      "avoid": "Для независимых вариантов — Checkbox; для длинного списка — SelectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Radio/Radio-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-radio--docs"
    },
    {
      "name": "RadioXGroup",
      "aliases": [],
      "use": "Горизонтальная группа вариантов одного выбора.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Radio/RadioXGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-radioxgroup--docs"
    },
    {
      "name": "RadioYGroup",
      "aliases": [],
      "use": "Вертикальная группа вариантов одного выбора.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Radio/RadioYGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-radioygroup--docs"
    },
    {
      "name": "Row",
      "aliases": [],
      "use": "Строка адаптивной сетки для размещения Col.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Row/Row-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-row--docs"
    },
    {
      "name": "SegmentedControl",
      "aliases": [],
      "use": "Несколько видимых переключателей режима: период, вид списка, способ представления.",
      "avoid": "Не подменять им обычный текстовый ввод или длинный список.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SegmentedControl/SegmentedControl-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-segmentedcontrol--docs"
    },
    {
      "name": "SelectExtendedField",
      "aliases": [],
      "use": "Поле выбора с нестандартным выпадающим содержимым: сложные пункты, дерево, фильтр.",
      "avoid": "Обычный плоский список — SelectField; несколько значений — MultiselectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SelectExtendedField/SelectExtendedField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-selectextendedfield--docs"
    },
    {
      "name": "SelectField",
      "aliases": [
        "Select",
        "ComboBox"
      ],
      "use": "Готовое поле выбора одного значения из плоского списка.",
      "avoid": "Поиск по вводу — SuggestField; сложное содержимое — SelectExtendedField; несколько значений — MultiselectField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SelectField/SelectField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-selectfield--docs"
    },
    {
      "name": "Slider",
      "aliases": [],
      "use": "Приблизительный выбор одного числа на шкале.",
      "avoid": "Для точного ввода — NumberField или AmountField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Slider/Slider-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-slider-slider--docs"
    },
    {
      "name": "SliderExtended",
      "aliases": [],
      "use": "Основа слайдера с настраиваемыми частями и оформлением.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SliderExtended/SliderExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-slider-sliderextended--docs"
    },
    {
      "name": "SliderRange",
      "aliases": [],
      "use": "Выбор двух границ числового диапазона на шкале.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SliderRange/SliderRange-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-slider-sliderrange--docs"
    },
    {
      "name": "SmartSpot",
      "aliases": [],
      "use": "Выразительный фон итогового экрана или карточки результата операции.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SmartSpot/SmartSpot-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-smartspot--docs"
    },
    {
      "name": "SMSField",
      "aliases": [],
      "use": "Ввод цифрового кода подтверждения с повторным запросом кода.",
      "avoid": "Не номер телефона: для него подходит MaskedField с подтверждённой маской.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SMSField/SMSField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-smsfield--docs"
    },
    {
      "name": "Spoiler",
      "aliases": [],
      "use": "Скрываемые подробности внутри основного содержимого.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Spoiler/Spoiler-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-spoiler--docs"
    },
    {
      "name": "StatusTracker",
      "aliases": [],
      "use": "Крупный экран статуса одного объекта или операции с пояснением.",
      "avoid": "Для компактного статуса строки — MarkerStatus.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/StatusTracker/StatusTracker-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-statustracker--docs"
    },
    {
      "name": "Step",
      "aliases": [],
      "use": "Номер и статус отдельного шага процесса.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Step/Step-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-step--docs"
    },
    {
      "name": "Stepper",
      "aliases": [],
      "use": "Готовая последовательность шагов с индикацией прохождения и переключением.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Stepper/Stepper-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-stepper--docs"
    },
    {
      "name": "StepperExtended",
      "aliases": [],
      "use": "Настраиваемая композиция шагов для нестандартного сценария.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Stepper/StepperExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-stepperextended--docs"
    },
    {
      "name": "Suggest",
      "aliases": [],
      "use": "Основа подсказок с собственным управляющим элементом и списком.",
      "avoid": "Для готового поля — SuggestField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Suggest/Suggest-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-suggest--docs"
    },
    {
      "name": "SwipeableArea",
      "aliases": [],
      "use": "Область мобильного свайпа для раскрытия действий над содержимым.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SwipeableArea/SwipeableArea-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-swipeablearea--docs"
    },
    {
      "name": "TableBasic",
      "aliases": [],
      "use": "Таблица записей в строках и колонках: операции, документы, реестр.",
      "avoid": "Для обвязки фильтрами и пагинацией — MasterTable.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Table/TableBasic-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tablebasic--docs"
    },
    {
      "name": "Tabs",
      "aliases": [],
      "use": "Готовое переключение разделов через вкладки.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Tabs/Tabs-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tabs--docs"
    },
    {
      "name": "TabsExtended",
      "aliases": [],
      "use": "Вкладки с нестандартным содержимым и составом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TabsExtended/TabsExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tabsextended--docs"
    },
    {
      "name": "TabsLine",
      "aliases": [],
      "use": "Вкладки с подчёркиванием, например над таблицей.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TabsLine/TabsLine-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tabsline--docs"
    },
    {
      "name": "Tag",
      "aliases": [],
      "use": "Выбранное значение, которое можно убрать или изменить.",
      "avoid": "Неинтерактивная цветная метка — TagColor.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Tag/Tag-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tag--docs"
    },
    {
      "name": "TagColor",
      "aliases": [],
      "use": "Неинтерактивная цветная метка категории или статуса.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TagColor/TagColor-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tagcolor--docs"
    },
    {
      "name": "TagGroup",
      "aliases": [],
      "use": "Группа выбранных значений с едиными отступами.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TagGroup/TagGroup-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-taggroup--docs"
    },
    {
      "name": "AmountField",
      "aliases": [
        "Amount Input"
      ],
      "use": "Ввод денежной суммы с валютой и форматированием разрядов.",
      "avoid": "Для количества — NumberField; для показа баланса или итога без ввода — Amount.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/AmountField/AmountField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-amountfield--docs"
    },
    {
      "name": "MaskedField",
      "aliases": [],
      "use": "Ввод по фиксированному формату: телефон, ИНН, реквизиты, идентификатор.",
      "avoid": "Маска должна быть задана требованиями или доступными свойствами; не выдумывать ограничения.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/MaskedField/MaskedField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-maskedfield--docs"
    },
    {
      "name": "SmallInput",
      "aliases": [],
      "use": "Компактное редактирование короткого значения прямо в плотной верстке.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SmallInput/SmallInput-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-smallinput--docs"
    },
    {
      "name": "SuggestField",
      "aliases": [],
      "use": "Поле ввода с поиском и подсказками из вариантов: контрагент, адрес, счёт.",
      "avoid": "Не обычный текст без справочника; для сложной композиции — Suggest.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/SuggestField/SuggestField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-suggestfield--docs"
    },
    {
      "name": "TextareaField",
      "aliases": [
        "TextArea",
        "Text Area",
        "многострочное поле"
      ],
      "use": "Ввод нескольких строк: комментарий, назначение платежа, описание.",
      "avoid": "Не однострочные реквизиты.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TextareaField/TextareaField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-textareafield--docs"
    },
    {
      "name": "TextField",
      "aliases": [
        "Text Field",
        "поле ввода"
      ],
      "use": "Свободный однострочный текст без специального формата.",
      "avoid": "Деньги — AmountField; число — NumberField; маска — MaskedField; дата — DateField; справочник — SelectField / SuggestField; несколько строк — TextareaField.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TextField/TextField-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-textfields-textfield--docs"
    },
    {
      "name": "ThemeProvider",
      "aliases": [],
      "use": "Служебная настройка темы и токенов; не визуальный элемент макета.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/ThemeProvider/ThemeProvider-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-themeprovider--docs"
    },
    {
      "name": "Tooltip",
      "aliases": [],
      "use": "Всплывающее пояснение элемента коротким текстом.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Tooltip/Tooltip-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-tooltip--docs"
    },
    {
      "name": "TopOverlay",
      "aliases": [],
      "use": "Перекрывающая панель внутри LightBox, например для подтверждения выхода.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TopOverlay/TopOverlay-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-topoverlay--docs"
    },
    {
      "name": "TreeView",
      "aliases": [],
      "use": "Основа дерева с навигацией и своей отрисовкой узлов.",
      "avoid": "Для готового дерева — CollapsibleTree; выбора значений — CheckboxTree.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/TreeView/TreeView-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-treeview--docs"
    },
    {
      "name": "TriggerClickOnKeyDownEvent",
      "aliases": [],
      "use": "Служебный вызов действия по клавише, не визуальный элемент.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Triggers/TriggerClickOnKeyDownEvent-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-triggerclickonkeydownevent--docs"
    },
    {
      "name": "Typography",
      "aliases": [],
      "use": "Семейство отображения текста: Title, Text, Caption, CodeText.",
      "avoid": "Не TextField: текст отображается, а не вводится.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/stories/Typography/Typography.mdx",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-typography--docs"
    },
    {
      "name": "Caption",
      "aliases": [],
      "use": "Очень мелкая подпись либо крупный акцентный показатель.",
      "avoid": "Обычный текст — Text, семантический заголовок — Title.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Typography/Caption-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-typography-caption--docs"
    },
    {
      "name": "CodeText",
      "aliases": [],
      "use": "Моноширинное отображение кодов, реквизитов и идентификаторов.",
      "avoid": "Не поле ввода.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Typography/CodeText-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-typography-codetext--docs"
    },
    {
      "name": "Text",
      "aliases": [],
      "use": "Отображение основного текста, пояснения или готового значения.",
      "avoid": "Не TextField: не предназначен для ввода.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Typography/Text-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-typography-text--docs"
    },
    {
      "name": "Title",
      "aliases": [],
      "use": "Заголовок страницы, секции, карточки или окна.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/Typography/Title-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-typography-title--docs"
    },
    {
      "name": "UnorderedList",
      "aliases": [],
      "use": "Маркированный текстовый список с обычным содержимым пунктов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/UnorderedList/UnorderedList-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-unorderedlist--docs"
    },
    {
      "name": "UnorderedListExtended",
      "aliases": [],
      "use": "Маркированный список с произвольным составом и маркерами пунктов.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/UnorderedListExtended/UnorderedListExtended-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-unorderedlistextended--docs"
    },
    {
      "name": "UploadZone",
      "aliases": [],
      "use": "Область выбора и перетаскивания файлов.",
      "avoid": "Не текстовое поле пути к файлу; список загруженных файлов оформляется отдельно.",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/UploadZone/UploadZone-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-uploadzone--docs"
    },
    {
      "name": "WindowResizeListener",
      "aliases": [],
      "use": "Служебная реакция на изменение окна; не компонент дизайна.",
      "avoid": "",
      "source": "https://github.com/SberBusiness/triplex-next/blob/main/src/components/WindowResizeListener/WindowResizeListener-ai.md",
      "storybook": "https://triplex-design.ru/storybook/main/?path=/docs/components-windowresizelistener--docs"
    }
  ]
};
// END GENERATED TRIPLEX KNOWLEDGE

const lightboxKey = 'triplex-lightbox-variants';
const lightboxSizes = ['SM', 'MD', 'LG', 'XL'];
let prepared;
let conversation = [];
let itemSequence = 0;
let flow;
let approvedSource;
let pendingFlow;
let flowApproved = false;
let activeFormId;
let activeLibraryAssets;
let activeLightboxComponent;

pixso.showUI(__html__, { width: 545, height: 900, title: 'ChatToDesign · v2' });

function yieldToEditor() { return new Promise(resolve=>setTimeout(resolve,0)); }
const variantMetadataCache = new WeakMap();
function variantMetadata(variants) {
  let result=variantMetadataCache.get(variants);
  if (!result) {
    result={names:variants.map(component=>component.name),bindings:variants.map(component=>({id:component.id,key:component.key,name:component.name}))};
    variantMetadataCache.set(variants,result);
  }
  return result;
}
function describeSummary(item) {
  return {uid:item.uid,name:item.name,text:item.text,purpose:prepared?.catalog?.[item.id-1]?.use || componentKnowledge({name:item.name})?.use,readOnly:isReadOnly(item.variants[item.variant].name),requestedReadOnly:item.readOnly};
}
function previewExportSettings(node, maxDimension = 960) {
  const extent=Math.max(Number(node.width)||1,Number(node.height)||1);
  return {format:'PNG',constraint:{type:'SCALE',value:Math.min(1,maxDimension/extent)}};
}

function modelConversation(task = prepared?.task) {
  // The saved transcript is untouched. Older assistant prose repeats plans and
  // is superseded by currentItems/components; keep all older user instructions.
  const boundary = Math.max(0, conversation.length - 6);
  const seen = new Set(task ? [task.trim()] : []);
  const earlierUserInstructions = [];
  for (const message of conversation.slice(0,boundary)) {
    if (message.role !== 'user' || typeof message.text !== 'string') continue;
    const text = message.text.trim();
    if (text && !seen.has(text)) { earlierUserInstructions.push(text);seen.add(text); }
  }
  return { earlierUserInstructions, recent:conversation.slice(boundary),
    rule:'Актуальный состав и настройки заданы в components/currentItems. Старые ответы модели не являются текущим набором. Последние просьбы уточняют ранние.' };
}

function requestKnowledgeCatalog(type, catalog) {
  if (type === 'copyRequest') {
    const item=prepared?.items?.[prepared.index];
    return item ? catalog.filter((_,index)=>index+1===item.id) : [];
  }
  if (type === 'flowRequest') {
    const frame=approvedSource?.frameId && pixso.getNodeById(approvedSource.frameId);
    if (!frame || frame.removed) return [];
    return sourceFields(frame).map(node=>{
      const component=node.mainComponent;
      const names=[node.getPluginData('triplex-component-name'),component?.parent?.type==='COMPONENT_SET' ? component.parent.name : '',component?.name,node.name].filter(Boolean);
      const doc=names.map(name=>componentKnowledge({name})).find(Boolean);
      return {name:names[0] || '',knowledgeName:doc?.name || null};
    });
  }
  return catalog;
}

function send(type, data) {
  if (['prepared', 'dialogRequest', 'copyRequest', 'flowRequest'].includes(type)) {
    const catalog = prepared?.catalog || libraryCatalog(activeLibraryAssets);
    const scopedCatalog=requestKnowledgeCatalog(type,catalog);
    const scope=type==='copyRequest'?'copy':type==='flowRequest'?'states':'catalog';
    const prompt=withTriplexKnowledge(data.prompt,scopedCatalog,scope);
    data = { ...data, prompt, catalogInfo:catalogInfo(catalog), requestMetrics:{characters:prompt.length,scope,documentedTypes:new Set(scopedCatalog.map(item=>item.knowledgeName).filter(Boolean)).size} };
  }
  pixso.ui.postMessage({ type, ...data });
}

// Match component identities, not arbitrary substrings such as Text in TextField.
function componentPattern(name) {
  const words = name.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2').replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[\s_.-]+/).filter(Boolean);
  const escaped = words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp('(?:^|[^a-zа-яё0-9])' + escaped.join('[\\s_.-]*') + '(?=$|[^a-zа-яё0-9])', 'i');
}
const knowledgeMatchers = triplexKnowledge.components.flatMap(doc => [doc.name, ...doc.aliases]
  .map(name => ({ doc, name, pattern: componentPattern(name) }))).sort((a, b) => b.name.length - a.name.length);
function componentKnowledge(asset) {
  for (const name of [asset.name, asset.containerName, ...(asset.categories || []).slice().reverse()]) {
    if (typeof name !== 'string') continue;
    // A full Pixso path is resolved from leaf to root.
    for (const segment of name.split('/').reverse()) {
      const match = knowledgeMatchers.find(entry => entry.pattern.test(segment));
      if (match) return match.doc;
    }
  }
  return null;
}

const libraryCatalogCache = new WeakMap();
function libraryCatalog(assets) {
  if(!Array.isArray(assets))return [];
  let catalog=libraryCatalogCache.get(assets);
  if(!catalog){catalog=formCatalog(assets);libraryCatalogCache.set(assets,catalog);}
  return catalog;
}

function formCatalog(assets) {
  const candidates = new Map();
  const supported = assets.filter(asset => asset.key && ['COMPONENT', 'COMPONENT_SET'].includes(asset.type));
  // When Pixso exposes a set and its children separately, choose the set once.
  const variantKeys = new Set(supported.filter(asset => asset.type === 'COMPONENT_SET')
    .flatMap(asset => (asset.variants || []).map(variant => variant.key).filter(Boolean)));
  for (const asset of supported) {
    if (asset.type === 'COMPONENT' && variantKeys.has(asset.key)) continue;
    const path = [...new Set([...(asset.categories || []), asset.containerName, asset.name].filter(Boolean))].join(' / ');
    if (/button|кнопк/i.test(path) || candidates.has(asset.key)) continue;
    const doc = componentKnowledge(asset);
    candidates.set(asset.key, { key: asset.key, type: asset.type, name: path,
      use: doc?.use || 'Назначение не подтверждено справочником. Не считать TextField; уточнить смысл перед выбором.',
      knowledgeName: doc?.name || null, variants: asset.variants?.map(({key,id,name})=>({key,id,name})) });
  }
  return [...candidates.values()];
}

function catalogIdentityError(message) {
  const error=new Error(message);
  error.code='MODEL_IDENTITY';
  return error;
}
function resolveCatalogIdentity(entry,catalog,required=false) {
  const key=entry.key ?? entry.componentKey;
  const component=entry.component ?? entry.componentName;
  const id=typeof entry.id==='string'&&/^\d+$/.test(entry.id.trim())?Number(entry.id.trim()):entry.id;
  const keyIndex=key===undefined?-1:catalog.findIndex(asset=>asset.key===key);
  if(key!==undefined&&keyIndex<0)throw catalogIdentityError('Ключ компонента не найден в текущем каталоге.');
  const index=keyIndex>=0?keyIndex:id-1;
  const asset=catalog[index];
  if(!Number.isInteger(index)||!asset)throw catalogIdentityError('Компонент не найден в текущем каталоге.');
  if(keyIndex>=0 && id!==undefined && id!==keyIndex+1)throw catalogIdentityError('ID и ключ указывают на разные компоненты. Скопируй их из одной строки каталога.');
  if(required && (typeof component!=='string'||!component.trim()))throw catalogIdentityError('Не указан тип выбранного компонента. Вместе с id/key передай component из doc или точное name каталога.');
  if(component!==undefined && (typeof component!=='string'||![asset.name,asset.knowledgeName].filter(Boolean).includes(component.trim()))) {
    throw catalogIdentityError('Несовпадение типа: выбран «'+String(component)+'», но ссылка ведёт на «'+asset.name+'». Нельзя вставить другой тип по этому ID.');
  }
  return index+1;
}


function modelCatalog(catalog) {
  return catalog.map((item, index) => ({ id: index + 1, key:item.key, name: item.name, doc: item.knowledgeName }));
}

function catalogInfo(catalog) {
  const known = catalog.filter(item => item.knowledgeName).length;
  return `Каталог Pixso: ${catalog.length} компонентов; назначение сопоставлено: ${known}; требует уточнения: ${catalog.length - known}. Кнопки исключены.`;
}

function resolveEditorialProfile(task = '', standard = '') {
  const explicit=String(standard).match(/(?:профиль|profile)\s*[:=]\s*(triplex|sbol|сбол)/i)?.[1].toLowerCase();
  if(explicit)return explicit==='сбол'?'sbol':explicit;
  return /СберБанк\s*Онлайн|СБОЛ/i.test(task)&&!/СберБизнес/i.test(task)?'sbol':editorialPolicy.defaultProfile;
}
function editorialContext(scope) {
  const task=prepared?.task || approvedSource?.task || '';
  const standard=prepared?.standard || approvedSource?.standard || '';
  const profile=resolveEditorialProfile(task,standard);
  return JSON.stringify({editorialPolicy:{
    version:editorialPolicy.version,profile,
    sourceVersions:editorialPolicy.sources.map(({id,version})=>({id,version})),
    appliesTo:'Правила относятся к клиентским подписям, placeholders, Description и текстам состояний/ошибок. Это не инструкции менять формат ответа, добавлять кнопки или переписывать подтверждённые тексты.',
    precedence:editorialPolicy.precedence,
    channel:editorialPolicy.profiles[profile],
    rules:editorialPolicy.rules.filter(rule=>rule.profiles.includes(profile)&&rule.scopes.includes(scope)).map(({id,rule})=>({id,rule})),
    limitation:scope==='states'?'Внутренний каталог системных ошибок Triplex не прочитан. Предлагаемые тексты не выдавай за дословные согласованные системные сообщения.':undefined
  }});
}

function withTriplexKnowledge(prompt, catalog, scope = 'catalog') {
  const rules = scope === 'catalog' ? [
    'СПРАВОЧНИК TRIPLEX. Это знания о назначении компонентов, а не список доступных экземпляров.',
    'Доступны для вставки ТОЛЬКО key/id из текущего каталога Pixso. doc связывает экземпляр со справочником; doc:null означает неподтвержденное назначение. Не выдумывай ссылки и не считай неизвестный компонент TextField.',
    'Рассматривай весь каталог: поля, отображение данных, таблицы, списки, карточки, загрузку файлов, навигацию и структуру. Сначала определи смысл задачи, затем выбирай компонент. Не ограничивайся полями ввода.',
    'Различай ввод и показ: AmountField — ввод денег, Amount — готовая сумма; NumberField — количество; MaskedField — заданный формат; Text — показ текста, TextField — свободный однострочный ввод.',
    'Выбор одного — SelectField, нескольких — MultiselectField; поиск по справочнику — SuggestField; сложные пункты (например кошелёк с именем, ID и балансом) — проверь SelectExtendedField. Не обещай отсутствующие в Pixso свойства.',
    'Для даты, периода, файла, таблицы и статуса ищи специализированный компонент. Если его нет в каталоге, объясни отсутствие, спроси про замену; не подставляй TextField автоматически.',
    'React props из документации не равны свойствам Pixso. Настраивать можно только переданные fields/variants. Контейнеры не получают вложенный контент автоматически; поясни ручную компоновку. Не вставляй повторно уже установленный LightBox/BodyPage.',
    'Кнопки запрещены; не обходи запрет через Link/CardAction/Chip для той же кнопочной задачи. Не предлагай дополнительные состояния и ошибки до этапа закрепленной верстки.',
    'В reply кратко объясни выбранные типы и недоступные возможности. Для doc:null признай нехватку сведений и задай вопрос, а не приписывай компоненту выдуманное назначение.'
  ].join('\n') : [
    'СПРАВОЧНИК TRIPLEX для выбранных компонентов. Состав уже согласован; не подбирай новые компоненты.',
    'Используй только переданные свойства и варианты Pixso, не выдумывай React props. Если возможности нет, явно объясни ограничение.',
    scope==='copy' ? 'Настрой только тексты текущего компонента. Ошибки и состояния будут согласованы после верстки.' : 'Предложи состояния только для компонентов закреплённого экрана. Не меняй их состав. Неподтвержденные бизнес-правила помечай как гипотезы.',
    'Соблюдай текстовый стандарт и указания пользователя. Ответь только запрошенным JSON; пояснение краткое.'
  ].join('\n');
  const base = prompt + '\n' + rules + '\n' + editorialContext(scope);
  // Never silently cut actual Pixso IDs or conversation to make room for documentation.
  if (base.length > 46500) throw new Error('Каталог и диалог превышают лимит контекста. Сократите описание или начните новый подбор. Компоненты не были скрыты из каталога.');
  const available = new Set(catalog.map(item => item.knowledgeName).filter(Boolean));
  const docs = triplexKnowledge.components.filter(doc => available.has(doc.name));
  const brief = docs.map(doc => ({ name: doc.name, use: doc.use }));
  let knowledge = { version: triplexKnowledge.version, components: brief };
  const encode = () => '\n' + JSON.stringify({ triplexKnowledge: knowledge });
  // Every matched type gets its purpose. If even that cannot fit, report it explicitly.
  if (base.length + encode().length > 48000) throw new Error('Назначения всех компонентов не помещаются в контекст модели. Сократите описание или начните новый подбор; каталог не обрезан.');
  // Add distinctions for relevant types first; the brief inventory always remains complete.
  const ranked = docs.slice().sort((a, b) => Number(prompt.toLowerCase().includes(b.name.toLowerCase())) - Number(prompt.toLowerCase().includes(a.name.toLowerCase())));
  const distinctions = [];
  knowledge.distinctions = distinctions;
  for (const doc of ranked) {
    if (!doc.avoid) continue;
    distinctions.push({ name: doc.name, avoid: doc.avoid });
    if (base.length + encode().length > 48000) distinctions.pop();
  }
  return base + encode();
}

function sourceFields(source) {
  const result = [];
  function visit(node) {
    if (node.type === 'INSTANCE' && node.getPluginData('triplex-field-id')) result.push(node);
    else for (const child of node.children || []) visit(child);
  }
  visit(source);
  return result;
}

function layoutSignature(node) {
  // Serialize the nested tree once. Serializing each child first repeatedly
  // escapes its JSON at every ancestor and grows exponentially with depth.
  const snapshot = node => [node.id, node.x, node.y, node.width, node.height, node.layoutMode,
    node.componentProperties, node.characters, (node.children || []).map(snapshot)];
  return 'v2:' + JSON.stringify(snapshot(node));
}

function lockedSource() {
  if (!approvedSource?.signature) throw new Error('Сначала расставьте компоненты и закрепите верстку.');
  const source = getActiveForm(approvedSource.frameId);
  if (layoutSignature(source) !== approvedSource.signature) throw new Error('Макет изменился. Закрепите верстку повторно и запросите состояния заново.');
  return source;
}

const fieldCopySnapshots=new WeakMap();
function textCopyRole(name) {
  if(isLabel(name))return 'label';
  if(/^(?:placeholder|плейсхолдер|заполнитель)(?:#|$)/i.test(name))return 'placeholder';
  if(stateRolePatterns.description.test(name))return 'description';
  if(stateRolePatterns.value.test(name))return 'value';
}
function copyContext(node,snapshot=fieldCopySnapshots.get(node)) {
  const result={};
  for(const role of ['label','placeholder','value','description']) {
    const layers=(snapshot?.layers||[]).filter(layer=>layer.role===role);
    const properties=Object.entries(node.componentProperties||{}).filter(([key,prop])=>prop.type==='TEXT'&&textCopyRole(key)===role);
    if(layers.length===1)result[role]=layers[0].value;
    else if(properties.length===1)result[role]=properties[0][1].value;
  }
  return result;
}
async function captureFieldCopy(node,includeHidden=false) {
  const properties=Object.fromEntries(Object.entries(node.componentProperties||{}).filter(([,prop])=>['TEXT','BOOLEAN'].includes(prop.type)).map(([key,prop])=>[key,{type:prop.type,value:prop.value}]));
  const layers=[],stack=[{node,path:[],parents:[]}];let visited=0;
  while(stack.length) {
    const entry=stack.pop(),current=entry.node;
    if(current.visible===false&&!includeHidden)continue;
    if(current.type==='TEXT') {
      const ownRole=textCopyRole(current.name||'');
      const parentRole=entry.parents.map(parent=>textCopyRole(parent.name||'')).reverse().find(Boolean);
      const role=(/^(?:text|content|текст)(?:#|$)/i.test(current.name||'')?parentRole:ownRole)||ownRole||parentRole;
      if(role)layers.push({path:entry.path,name:current.name,role,value:current.characters});
    }
    Array.from(current.children||[]).forEach((child,index)=>stack.push({node:child,path:[...entry.path,index],parents:[...entry.parents,current]}));
    if(++visited%100===0)await yieldToEditor();
  }
  const snapshot={properties,layers};fieldCopySnapshots.set(node,snapshot);return snapshot;
}
async function restoreFieldCopy(node,snapshot) {
  const actual=Object.entries(node.componentProperties||{}),values={};
  const base=key=>key.replace(/#.*$/,'').trim().toLowerCase();
  const stateBoolean=key=>/active|focus|typing|open|expand|collapse|error|warning|invalid|disabled|enabled|filled|empty|selected|checked|pressed|loading|readonly|read.only|hover|состояни|ошиб|фокус/i.test(key);
  for(const [key,prop] of Object.entries(snapshot.properties)) {
    if(prop.type==='BOOLEAN'&&stateBoolean(key))continue;
    const exact=actual.find(([name,target])=>name===key&&target.type===prop.type);
    let matches=exact?[exact]:actual.filter(([name,target])=>base(name)===base(key)&&target.type===prop.type);
    if(!matches.length&&prop.type==='TEXT') {
      const role=textCopyRole(key);
      const sourceMatches=Object.entries(snapshot.properties).filter(([name,source])=>source.type==='TEXT'&&textCopyRole(name)===role);
      if(role&&sourceMatches.length===1)matches=actual.filter(([name,target])=>target.type==='TEXT'&&textCopyRole(name)===role);
    }
    if(matches.length===1)values[matches[0][0]]=prop.value;
    else if(prop.type==='TEXT')throw new Error('Не удалось сохранить текст «'+key+'» после смены варианта. Копия не создана.');
  }
  if(Object.keys(values).length)await setInstanceValues(node,values,node.name);
  if(!snapshot.layers.length)return;
  const target=await captureFieldCopy(node,true);
  for(const layer of snapshot.layers) {
    const exact=target.layers.find(candidate=>candidate.role===layer.role&&candidate.name===layer.name&&candidate.path.join('.')===layer.path.join('.'));
    let matches=exact?[exact]:target.layers.filter(candidate=>candidate.role===layer.role&&candidate.name===layer.name);
    if(!matches.length&&snapshot.layers.filter(candidate=>candidate.role===layer.role).length===1)matches=target.layers.filter(candidate=>candidate.role===layer.role);
    if(matches.length!==1)throw new Error('Не удалось сохранить '+({label:'подпись',placeholder:'подсказку',value:'значение',description:'описание'}[layer.role]||'текст')+' после смены варианта. Копия не создана.');
    const text=matches[0].path.reduce((parent,index)=>parent.children?.[index],node);
    await setTextLayerValue(text,layer.value);
  }
}
function mapVariantCopyValues(values,fromFields,toFields) {
  const prior=new Map(fromFields),target=Array.from(toFields),result={};
  const base=key=>key.replace(/#.*$/,'').toLowerCase();
  for(const [key,value] of Object.entries(values||{})) {
    const type=typeof value==='boolean'?'BOOLEAN':typeof value==='string'?'TEXT':undefined;
    if(!type||prior.get(key)?.type!==type)continue;
    const exact=target.find(([name,prop])=>name===key&&prop.type===type);
    let matches=exact?[exact]:target.filter(([name,prop])=>prop.type===type&&base(name)===base(key));
    if(!matches.length&&type==='TEXT') {
      const role=textCopyRole(key);
      if(role&&fromFields.filter(([name,prop])=>prop.type==='TEXT'&&textCopyRole(name)===role).length===1)matches=target.filter(([name,prop])=>prop.type==='TEXT'&&textCopyRole(name)===role);
    }
    if(matches.length===1)result[matches[0][0]]=value;
  }
  return result;
}
function applySemanticCopyPatch(item,patch,fields) {
  for(const [semantic,role] of [['text','label'],['placeholder','placeholder'],['value','value']]) {
    if(patch[semantic]===undefined)continue;
    const matches=Array.from(fields).filter(([key,prop])=>prop.type==='TEXT'&&textCopyRole(key)===role);
    if(matches.length!==1)throw revisionFormatError('Не удалось однозначно применить текст '+semantic+'. Передай values с точным ключом из fields.');
    const key=matches[0][0];
    if(patch.values&&Object.prototype.hasOwnProperty.call(patch.values,key)&&patch.values[key]!==patch[semantic])throw revisionFormatError('Текст '+semantic+' противоречит свойству '+key+'.');
    item.values[key]=patch[semantic];
  }
}

function syncItemCopy(item) {
  if(item.texts)item.texts={...item.texts};
  const fields=editableProperties(item.variants[item.variant]);
  for(const [semantic,role] of [['text','label'],['placeholder','placeholder'],['value','value']]) {
    const matches=fields.filter(([key,prop])=>prop.type==='TEXT'&&textCopyRole(key)===role&&Object.prototype.hasOwnProperty.call(item.values||{},key));
    if(matches.length===1){item[semantic]=item.values[matches[0][0]];if(item.texts)delete item.texts[matches[0][0]];}
  }
}

function confirmedFlowFields(source) {
  return sourceFields(source).map(node=>{
    const id=node.getPluginData('triplex-field-id');
    const approved=approvedSource?.components?.find(item=>String(item.uid)===id);
    const name=node.getPluginData('triplex-component-name') || approved?.name || node.mainComponent?.parent?.name || node.name;
    const currentCopy=copyContext(node);
    const label=currentCopy.label ?? node.getPluginData('triplex-field-label');
    const doc=componentKnowledge({name});
    return { field:id,label,component:name,purpose:doc?.use || 'Назначение не сопоставлено',
      currentCopy,
      confirmed:{text:label,value:currentCopy.value??approved?.value,placeholder:currentCopy.placeholder??approved?.placeholder,readOnly:approved?.readOnly,optionExample:approved?.optionExample},
      width:node.width,height:node.height,properties:node.componentProperties,stateCapabilities:componentStateCapabilities(node),
      currentVariant:node.mainComponent?.name,
      variants:availableStateVariants(node).filter(variant=>compatibleStateVariant(node,variant)).map(variant=>variant.name),
      variantOptions:availableStateVariants(node).filter(variant=>compatibleStateVariant(node,variant)).map(({key,name})=>({key,name})) };
  });
}
const stateRolePatterns = {
  value: /^(?:value|input[ _-]?value|значение|text|content)(?:#|$)/i,
  description: /^(?:description|(?:form[ _-]?)?field[ _-]?description|helper[ _-]?text|supporting[ _-]?text|описание|подсказка)(?:#|$)/i,
  error: /^(?:error(?:[ _-]?(?:text|message))?|validation(?:[ _-]?message)?|ошибка|текст ошибки)(?:#|$)/i
};
function availableStateVariants(node) {
  const current = node.mainComponent;
  return current?.parent?.type === 'COMPONENT_SET' ? Array.from(current.parent.children).filter(child => child.type === 'COMPONENT') : [];
}
function variantToken(value) {
  return String(value).normalize('NFKC').trim().toLowerCase().replace(/[ _-]+/g,'');
}
function variantAxes(name) {
  const axes=new Map();
  for(const part of String(name || '').split(',')) {
    const equal=part.indexOf('=');
    if(equal>=0)axes.set(variantToken(part.slice(0,equal)),part.slice(equal+1).trim());
  }
  return axes;
}
function isStateValue(value) {
  return /^(?:default|normal|empty|filled|hover|hovered|focus|focused|active|typing|error|invalid|warning|success|disabled|enabled|readonly|open|opened|closed|expanded|collapsed|selected|unselected|checked|unchecked|indeterminate|pressed|loading|обычн(?:ый|ое)|поумолчанию|пуст(?:ой|ое)|заполнен(?:ный|ное)|наведение|фокус|активн(?:ый|ое)|ошибка|неактивн(?:ый|ое)|раскрыт(?:ый|ое)|закрыт(?:ый|ое)|выбран(?:ный|ное)|загрузка)$/.test(variantToken(value));
}
function isStateAxis(axis,current,next) {
  if(/^(?:state|status|focus|focused|active|typing|open|opened|expand|expanded|error|warning|invalid|validation|hover|disabled|enabled|filled|empty|selected|checked|pressed|loading|readonly|состояние|статус|ошибка|фокус|активность|раскрытие)$/.test(axis))return true;
  // Generic variant axes may hold state names, but never infer size/theme from them.
  return /^(?:property\d*|variant\d*|свойство\d*|вариант\d*)$/.test(axis)&&isStateValue(current)&&isStateValue(next);
}
function variantChanges(node,candidate) {
  const current=variantAxes(node.mainComponent?.name),next=variantAxes(candidate.name),changes=[];
  for(const axis of new Set([...current.keys(),...next.keys()])) {
    const before=current.get(axis),after=next.get(axis);
    if(before!==undefined&&after!==undefined&&variantToken(before)===variantToken(after))continue;
    if(before!==undefined&&after!==undefined&&isStateAxis(axis,before,after))continue;
    changes.push(axis+': '+(before??'не задано')+' → '+(after??'не задано'));
  }
  if(!current.size&&!next.size) {
    const before=String(node.mainComponent?.name || '').split(/[\/,]/).map(variantToken);
    const after=String(candidate.name || '').split(/[\/,]/).map(variantToken);
    if(before.length!==after.length||before.some((value,i)=>value!==after[i]&&!(isStateValue(value)&&isStateValue(after[i]))))changes.push('несовместимое оформление варианта');
  }
  return changes;
}
function compatibleStateVariant(node,candidate) {
  return variantChanges(node,candidate).length===0;
}
function stateIntentRole(value) {
  const token=variantToken(value);
  if(/^(?:active|focus|focused|typing|активный|активное|фокус)$/.test(token))return 'active';
  if(/^(?:error|invalid|ошибка)$/.test(token))return 'error';
  if(/^(?:open|opened|expanded|раскрытый|открытый)$/.test(token))return 'opened';
}
function choiceAxes(choice) {
  if(choice.axes)return new Map(Object.entries(choice.axes).map(([axis,value])=>[variantToken(axis),String(value)]));
  return variantAxes(choice.variant);
}
function matchesVariantChoice(candidate,choice) {
  const requested=choiceAxes(choice),actual=variantAxes(candidate.name);
  if(requested.size){
    if(![...requested].every(([axis,value])=>actual.has(axis)&&variantToken(actual.get(axis))===variantToken(value)))return false;
    return choice.axes&&choice.variant?matchesVariantChoice(candidate,{variant:choice.variant}):true;
  }
  if(choice.variant&&variantToken(candidate.name)===variantToken(choice.variant))return true;
  if(!choice.variant)return false;
  const token=variantToken(choice.variant);
  if([...actual].some(([axis,value])=>isStateAxis(axis,value,value)&&variantToken(value)===token))return true;
  const role=stateIntentRole(choice.variant);
  return role?variantMatchesState(candidate.name,role):isStateValue(token)&&variantToken(actual.get(token))==='true';
}
function variantChoiceDistance(node,candidate,choice) {
  const current=variantAxes(node.mainComponent?.name),next=variantAxes(candidate.name),requested=choiceAxes(choice);
  const role=stateIntentRole(choice.variant);
  let score=0;
  for(const [axis,value] of next) {
    if(requested.has(axis))continue;
    if(!requested.size&&choice.variant) {
      const token=variantToken(choice.variant);
      if(variantToken(value)===token)continue;
      if(role&&variantMatchesState(axis+'='+value,role))continue;
      if(axis===token&&variantToken(value)==='true')continue;
    }
    if(current.has(axis)&&variantToken(current.get(axis))!==variantToken(value))score++;
  }
  return score;
}
function closestStateVariant(node,matches,choice) {
  const ranked=matches.map(variant=>({variant,distance:variantChoiceDistance(node,variant,choice)})).sort((a,b)=>a.distance-b.distance);
  if(ranked.length&&(!ranked[1]||ranked[0].distance<ranked[1].distance))return ranked[0].variant;
}
function resolveStateVariant(node,choice) {
  const variants=availableStateVariants(node),label=node.getPluginData?.('triplex-field-label')||node.name||choice.field;
  const fail=message=>{throw new Error('Компонент «'+label+'»: '+message);};
  const key=typeof choice.key==='string'&&choice.key.trim()?choice.key.trim():undefined;
  const hasName=typeof choice.variant==='string'&&choice.variant.trim();
  const requested=choiceAxes(choice);
  if(!key&&!hasName&&!requested.size)return fail('не указано нужное состояние. Ответ GigaCode должен содержать key, название или изменения осей.');
  if(key) {
    const candidate=variants.find(variant=>variant.key===key);
    if(!candidate)return fail('библиотечный ключ варианта не найден.');
    if((hasName||requested.size)&&!matchesVariantChoice(candidate,choice))return fail('ключ и название варианта указывают на разные состояния.');
    const changes=variantChanges(node,candidate);
    if(changes.length)return fail('выбранный вариант меняет размер, тему или другие неизменяемые параметры: '+changes.join('; ')+'.');
    return candidate;
  }
  const exact=hasName?variants.filter(variant=>variant.name===choice.variant):[];
  if(exact.length===1) {
    if(choice.axes&&!matchesVariantChoice(exact[0],choice))return fail('название варианта противоречит указанным изменениям осей.');
    const changes=variantChanges(node,exact[0]);
    if(changes.length)return fail('выбранный вариант меняет размер, тему или другие неизменяемые параметры: '+changes.join('; ')+'.');
    return exact[0];
  }
  const matches=variants.filter(candidate=>compatibleStateVariant(node,candidate)&&matchesVariantChoice(candidate,choice));
  const candidate=closestStateVariant(node,matches,choice);
  if(candidate)return candidate;
  if(matches.length>1)return fail('подходят несколько состояний. GigaCode должен уточнить изменяемые оси.');
  return fail('нужное состояние не найдено среди вариантов с текущими размером и темой.');
}
function stateVariantControl(node,role,filled) {
  const axes=variantAxes(node.mainComponent?.name);
  const choices=availableStateVariants(node).filter(variant=>compatibleStateVariant(node,variant)&&variantMatchesState(variant.name,role));
  const filledAxes=filled!==undefined&&axes.has('filled')?{filled}:undefined;
  const matching=filledAxes?choices.filter(variant=>variantToken(variantAxes(variant.name).get('filled'))===String(filled)):choices;
  const selector={variant:role==='active'?'Active':role==='opened'?'Opened':'Error'};
  const candidate=closestStateVariant(node,matching,selector);
  if(candidate)return {variants:[{field:node.getPluginData('triplex-field-id'),key:candidate.key||undefined,variant:candidate.name}]};
}
function componentStateCapabilities(node) {
  const properties=Object.entries(node.componentProperties || {});
  const matching=pattern=>properties.filter(([key,prop])=>prop.type==='BOOLEAN'&&pattern.test(key)).map(([key])=>key);
  return {
    opened:matching(/^(?:is[ _-]?)?(?:open(?:ed)?|expanded|show[ _-]?(?:dropdown|options)|раскрыт)(?:#|$)/i),
    active:matching(/^(?:is[ _-]?)?(?:active|focused?|typing|активн[^#]*|фокус)(?:#|$)/i),
    error:matching(/^(?!(?:hide|no|not|without|disable))[^#]*(?:error|invalid|ошиб)/i),
    description:properties.filter(([key,prop])=>prop.type==='TEXT'&&stateRolePatterns.description.test(key)).map(([key])=>key),
    controls:{active:stateVariantControl(node,'active',true),opened:stateVariantControl(node,'opened'),error:stateVariantControl(node,'error',copyContext(node).value===undefined?undefined:copyContext(node).value!=='')},
    variants:availableStateVariants(node).filter(variant=>compatibleStateVariant(node,variant)).map(variant=>variant.name)
  };
}
async function requestStates(message) {
  const mode=message.mode;
  const analytics=typeof message.analytics==='string'?message.analytics.trim():'';
  if(!['auto','analytics'].includes(mode))throw new Error('Выберите сценарий состояний.');
  if(mode==='analytics' && !analytics)throw new Error('Добавьте описание аналитики.');
  if(analytics.length>12000)throw new Error('Сократите аналитику до 12000 символов.');
  if(!approvedSource)throw new Error('Сначала поставьте компоненты на макет.');
  const requirements=approvedSource.task || message.requirements;
  if(typeof requirements!=='string'||!requirements.trim())throw new Error('Добавьте описание бизнес-задачи.');
  const source=getActiveForm(approvedSource.frameId);
  const signature=layoutSignature(source);
  if(approvedSource.signature!==signature) {
    approvedSource.signature=signature;source.locked=true;
    flow=null;invalidateFlow();
  }
  lockedSource();
  for(const node of sourceFields(source))await captureFieldCopy(node);
  if(flow && (flow.mode!==mode || flow.analytics!==analytics)) {flow=null;invalidateFlow();}
  requestFlow({...message,renderMode:'components',mode,analytics:mode==='analytics'?analytics:'',requirements,standard:approvedSource.standard || message.standard || '',feedback:message.feedback || ''});
}

function flowStateKey(state) { return JSON.stringify(state.field?[state.field,state.name,state.condition,state.errors]:[state.name,state.condition,state.errors]); }
function editedFlowStates(edits) {
  if (edits===undefined) return flow.states;
  if (!Array.isArray(edits) || edits.length!==flow.states.length) throw new Error('Предложения изменились. Откройте актуальный список состояний.');
  return flow.states.map((state,i)=>{
    const edit=edits[i];
    if (!edit || edit.sourceKey!==flowStateKey(state)) throw new Error('Тексты относятся к другому предложению. Обновите список состояний.');
    const valid=(value,allowEmpty=false)=>typeof value==='string' && value.length<=3000 && (allowEmpty||value.trim());
    if (!valid(edit.name)||!valid(edit.condition)||!edit.values||Array.isArray(edit.values)||typeof edit.values!=='object'||
      Object.keys(edit.values).length!==Object.keys(state.values).length || Object.entries(edit.values).some(([id,value])=>!Object.prototype.hasOwnProperty.call(state.values,id)||!valid(value,true)) ||
      !Array.isArray(edit.errorTexts)||edit.errorTexts.length!==state.errors.length||edit.errorTexts.some(text=>!valid(text))) throw new Error('Заполните название, условие и тексты ошибок (до 3000 символов).');
    return {...state,name:edit.name.trim(),condition:edit.condition.trim(),values:{...edit.values},errors:state.errors.map((error,j)=>({...error,text:edit.errorTexts[j].trim()}))};
  });
}

async function previewFlowState({ index, edits, selection, previewId }) {
  if(flow?.renderMode==='components')return previewComponentState({index,edits,previewId});
  let copy;
  try {
    const source=lockedSource();
    if (!flow?.states || !Number.isInteger(index)||!flow.states[index]) throw new Error('Состояние недоступно.');
    const states=editedFlowStates(edits);
    const isolated=selection.map((choice,i)=>({...choice,included:i===index&&choice.included}));
    const state=selectFlow(isolated,states)[0];
    if (!state) throw new Error('Состояние исключено. Включите его для превью.');
    copy=source.clone();copy.locked=false;copy.x=source.x+source.width+48;copy.y=source.y;
    const result=await applyStateToCopy(copy,state,source);
    if(typeof copy.exportAsync!=='function')throw new Error('Pixso не поддерживает экспорт превью.');
    await yieldToEditor();
    const png=await copy.exportAsync(previewExportSettings(copy));
    lockedSource();
    send('flowPreview',{index,previewId,png:Array.from(png),annotations:result.annotations,errorsPending:result.errorsPending,skipped:result.skipped});
  } catch(error) {send('flowPreview',{index,previewId,error:error.message});}
  finally {if(copy&&!copy.removed)copy.remove();}
}

function flowDraftOverrides(before,after) {
  return before.flatMap((state,i)=>{
    const draft=after[i];
    if(!draft)return [];
    const errors=state.errors.flatMap((error,j)=>draft.errors[j]?.text!==error.text?[{field:error.field,before:error.text,after:draft.errors[j].text}]:[]);
    const values=Object.entries(state.values).filter(([id,value])=>draft.values[id]!==value).map(([id,value])=>({id,before:value,after:draft.values[id]}));
    return errors.length||values.length||state.name!==draft.name||state.condition!==draft.condition?[{field:state.field,name:state.name,condition:state.condition,editedName:draft.name,editedCondition:draft.condition,errors,values}]:[];
  });
}
function restoreFlowDraftOverrides(plan,overrides=[]) {
  for(const edit of overrides) {
    const state=plan.states.find(state=>(!edit.field||state.field===edit.field||Object.prototype.hasOwnProperty.call(state.values,edit.field)||state.errors.some(error=>error.field===edit.field))&&[edit.name,edit.editedName].includes(state.name)&&[edit.condition,edit.editedCondition].includes(state.condition));
    if(!state)continue;
    if(state.name===edit.name)state.name=edit.editedName;
    if(state.condition===edit.condition)state.condition=edit.editedCondition;
    for(const change of edit.values)if(state.values[change.id]===change.before)state.values[change.id]=change.after;
    for(const change of edit.errors)for(const error of state.errors)if(error.field===change.field&&error.text===change.before)error.text=change.after;
  }
}
function stateHasVisibleChanges(state,nodes) {
  if(state.errors.length)return true;
  if((state.variants||[]).some(choice=>choice.variant!==nodes.get(choice.field)?.mainComponent?.name))return true;
  if((state.properties||[]).some(patch=>Object.entries(patch.values).some(([key,value])=>nodes.get(patch.field)?.componentProperties?.[key]?.value!==value)))return true;
  return Object.entries(state.values).some(([id,value])=>copyContext(nodes.get(id)).value!==value);
}
function uniqueChangedStates(states,nodes) {
  const seen=new Map();
  const sorted=entries=>entries.slice().sort((a,b)=>String(a[0]).localeCompare(String(b[0])));
  for(const state of states) {
    if(!stateHasVisibleChanges(state,nodes))continue;
    const key=JSON.stringify({values:sorted(Object.entries(state.values)),variants:sorted((state.variants||[]).map(v=>[v.field,v.variant])),properties:sorted((state.properties||[]).map(p=>[p.field,sorted(Object.entries(p.values))])),errors:state.errors.map(e=>[e.field,e.text])});
    const prior=seen.get(key);
    if(prior){if(prior.condition!==state.condition)prior.condition+='; '+state.condition;}
    else seen.set(key,state);
  }
  return [...seen.values()];
}

function requestFlow({ requirements, feedback, standard, selection, edits, mode = "auto", analytics = "", renderMode = "screens" }) {
  const source = lockedSource();
  if (typeof requirements !== 'string' || !requirements.trim()) throw new Error('Вставьте бизнес-требования.');
  if (requirements.length > 12000 || typeof standard !== 'string' || standard.length > 8000 ||
      typeof feedback !== 'string' || feedback.length > 2000) throw new Error('Сократите входной текст.');
  const previous=flow?editedFlowStates(edits):undefined;
  const context = { requirements: requirements.trim(), standard: standard.trim(), mode, analytics, feedback,renderMode };
  pendingFlow = {...context,draftOverrides:flow&&previous?flowDraftOverrides(flow.states,previous):[]};
  flowApproved = false;
  send('flowRequest', { prompt: [
    'Предложи отдельные состояния и ошибки КАЖДОГО компонента. Результат — независимые отрисованные компоненты, не экраны и не комбинации всех полей. Одна ошибка одного поля — один вариант. Не меняй состав компонентов.',
    'Обязательно проверь раскрытый Select/Multiselect/Suggest и активное печатание TextField/MaskedField/AmountField/NumberField: фокус/active плюс пример values. Добавляй только применимые реальные variants или BOOLEAN properties. Не имитируй раскрытие изменением текста.',
    'В режиме analytics правила и точные тексты из analytics имеют приоритет. В auto используй только ограничения, явно указанные в задаче или свойствах поля. Если правил не хватает, не создавай гипотетические ошибки ради количества: достаточно доступных взаимодействий.',
    'Triplex: TextFieldBase содержит FormField (active/status) и отдельный FormFieldDescription. Текст ошибки обычно записывается в Description, а error/status включается отдельно. React props не равны свойствам Pixso: используй только реальные поля properties/variants/stateCapabilities.',
    'Покрой все применимые состояния каждого поля, включая разные подтверждённые ошибки. Не ограничивайся 8 общими вариантами всей формы. Избегай декартовых комбинаций: выводи отдельные компоненты. Не добавляй начальную пустую форму, если это уже исходный макет. Для поля предложи конкретное взаимодействие или подтверждённую проверку. Не выдумывай лимиты, минимумы, обязательность, зависимости, сеть, успех или загрузку без основания в задаче/аналитике либо реально доступного состояния.',
    'Следуй текстовому стандарту. Значения вымышленные. Каждую независимую ошибку предложи отдельным состоянием, сочетания — только если нужны по кейсу.',
    'Верни только JSON: {"reply":"Короткое пояснение","states":[{"name":"Название состояния","condition":"Когда показать","values":{},"variants":[],"properties":[],"errors":[]}]}. Заполни нужные изменения реальными field и controls из fields. Не подставляй служебные слова из примера вместо библиотечных идентификаторов или состояний.',
    'Для взаимодействий предпочтительно копируй готовый control из fields.stateCapabilities.controls. Можно передать variants:[{field,axes:{State:"Active",Filled:true}}]; плагин сохранит неизменяемые оси. Для ошибки Error и Warning могут быть отдельными осями True/False, а не значениями State. Не передавай variant:"" или пустые записи variants.',
    'Для каждого состояния обязательно укажи name и condition. Если нет значений/ошибок, передай values:{} и errors:[], без null. field копируй из fields.field, не из номера каталога или позиции строки.',
    'Дай до 96 релевантных отдельных состояний компонентов (обычно до 12 на компонент). properties содержит только точные доступные ключи BOOLEAN/TEXT и значения подходящего типа. Не меняй size/theme. values, variants, properties и errors могут быть пустыми. Используй только field из fields; для variants скопируй key из variantOptions (предпочтительно) или точное полное имя. Не передавай название оси «State»/«Состояние» вместо значения. Для ошибки выбери совместимый вариант ошибки, если он доступен. Сохраняй предыдущие предложения и решения пользователя; по уточнению добавляй недостающие.',
    'fields.currentCopy — актуальные тексты с холста, включая ручные правки. Сохраняй подписи, placeholders и описания. Меняй только явно заданные в состоянии значения и Description соответствующей ошибки. Старые подписи из истории не должны возвращаться.',
    'fields — фактически подтверждённые компоненты с холста, их назначение, текущие свойства и доступные варианты. confirmedTask и decisions — исходная задача и решения пользователя. Следуй им; не возвращай удалённые или заменённые компоненты.',
    'Не предлагай ввод для компонента отображения Amount/Text. Учитывай поведение компонента: не предлагай невозможные действия (например ввод букв, если поле их отфильтровывает). Не меняй размер или тему ради ошибки. Используй только точные варианты из fields.',
    'Если нужное взаимодействие нельзя собрать по variants/BOOLEAN, не имитируй его. В reply говори по-русски о форме: без имён API, stateCapabilities, рассуждений о непрочитанных справочниках и списков гипотез. В reply максимум два коротких предложения о предложениях. Не пересказывай устройство формы и каталог. Для каждого состояния дай понятные name и condition, конкретные values и точные тексты errors. Не делай выводов об отсутствии компонентов во всей дизайн-системе по ограниченной справке.',
    JSON.stringify({ ...context, confirmedTask:approvedSource?.task || requirements, decisions:approvedSource?.decisions || modelConversation(), fields:confirmedFlowFields(source),
      previous,selection,feedback })
  ].join('\n') });
}

function variantMatchesState(name,role) {
  const values={
    opened:/^(?:open|opened|expanded|раскрытый|раскрытое|открытый|открытое)$/,
    active:/^(?:active|focus|focused|typing|активный|активное|фокус)$/,
    error:/^(?:error|invalid|ошибка)$/
  };
  const axesForRole={
    opened:/^(?:open|opened|expanded|dropdown|showdropdown|showoptions|раскрытие)$/,
    active:/^(?:active|focus|focused|typing|фокус|активность)$/,
    error:/^(?:error|invalid|ошибка)$/
  };
  const axes=variantAxes(name);
  if(axes.size)return [...axes].some(([axis,value])=>{
    const token=variantToken(value);
    if(axesForRole[role].test(axis))return /^(?:true|yes|on|1)$/.test(token)||values[role].test(token);
    return isStateAxis(axis,value,value)&&values[role].test(token);
  });
  return String(name).split(/[\/,]/).some(value=>values[role].test(variantToken(value)));
}
function stateControl(node,role,filled) {
  const capabilities=componentStateCapabilities(node);
  if(role!=='error'&&capabilities[role]?.length===1)return {properties:[{field:node.getPluginData('triplex-field-id'),values:{[capabilities[role][0]]:true}}]};
  const variant=stateVariantControl(node,role,filled);
  if(variant)return variant;
  if(role==='error'&&capabilities.error.length===1)return {properties:[{field:node.getPluginData('triplex-field-id'),values:{[capabilities.error[0]]:true}}]};
}
function completeInteractionStates(plan,nodes) {
  const missing=[];
  // Set the error status separately from the Description text, when unambiguous.
  for(const state of plan.states)for(const id of new Set(state.errors.map(error=>error.field).filter(Boolean))) {
    const node=nodes.get(id);
    if((state.variants||[]).some(choice=>choice.field===id)||(state.properties||[]).some(patch=>patch.field===id&&Object.keys(patch.values||{}).some(key=>/error|invalid|ошиб/i.test(key))))continue;
    const value=Object.prototype.hasOwnProperty.call(state.values,id)?state.values[id]:copyContext(node).value;
    const control=stateControl(node,'error',value===undefined?undefined:value!=='');
    if(control?.variants)state.variants=[...(state.variants||[]),...control.variants];
    if(control?.properties){
      state.properties=state.properties||[];
      const patch=state.properties.find(patch=>patch.field===id);
      if(patch)patch.values={...patch.values,...control.properties[0].values};else state.properties.push(...control.properties);
    }
  }
  for(const [id,node] of nodes) {
    const name=node.getPluginData('triplex-component-name')||node.mainComponent?.parent?.name||node.name||'';
    const doc=componentKnowledge({name})?.name||name;
    const role=/select|suggest/i.test(doc)?'opened':/(?:text|masked|amount|number|textarea)field/i.test(doc)?'active':null;
    if(!role||isReadOnly(node.mainComponent?.name||''))continue;
    const label=copyContext(node).label??node.getPluginData('triplex-field-label')??name;
    const control=stateControl(node,role,role==='active'?true:undefined);
    if(!control){missing.push({field:id,label,interaction:role==='opened'?'раскрытие списка':'активное поле'});continue;}
    const covered=plan.states.some(state=>(state.variants||[]).some(choice=>choice.field===id&&variantMatchesState(choice.variant,role)) || (state.properties||[]).some(patch=>patch.field===id&&Object.entries(patch.values).some(([key,value])=>componentStateCapabilities(node)[role].includes(key)&&value===true)));
    if(!covered){
      const valueProp=Object.entries(node.componentProperties||{}).find(([key,prop])=>prop.type==='TEXT'&&stateRolePatterns.value.test(key));
      const example=valueProp?(String(copyContext(node).value??valueProp[1].value??'')||(/number|amount/i.test(doc)?'10':/masked/i.test(doc)?'':'Пример ввода')):'';
      plan.states.push({name:(role==='opened'?'Раскрытый вариант':'Активное печатание')+' · '+label,condition:role==='opened'?'Пользователь раскрывает список':'Пользователь устанавливает фокус и вводит значение',values:role==='active'&&valueProp?{[id]:example}:{},errors:[],...control});
    }
  }
  plan.limitations=missing;
}

function requestFlowRepair(message,error) {
  if(message?.type!=='reviewFlow'||!pendingFlow||pendingFlow.repairAttempted)return false;
  const source=lockedSource();pendingFlow.repairAttempted=true;
  send('flowRequest',{repairing:true,prompt:[
    'Исправь ответ о состояниях формы. Верни только JSON {"reply":"Краткое пояснение","states":[{"name":"Название","condition":"Когда показать","values":{},"variants":[],"properties":[],"errors":[]}]}. Все field копируй из fields.field как строки; для общей ошибки формы используй field:"". Не подставляй ID типа из каталога.',
    'Ошибка проверки: '+(error.message||String(error)),
    'Используй только реальные field, совместимые variants и свойства BOOLEAN/TEXT из fields. Для варианта предпочитай {field,key} из variantOptions; не выдумывай key и не используй название оси «Состояние» как имя варианта. Не меняй размер/тему. Description содержит текст ошибки; отдельно нужен доступный error-variant/BOOLEAN. Раскрытие и активность допустимы только при доступном свойстве/варианте. Если реализация недоступна, объясни это в reply, не имитируй её пустой копией.',
    JSON.stringify({...pendingFlow,confirmedTask:approvedSource.task,fields:confirmedFlowFields(source),invalidResponse:typeof message.raw==='string'?message.raw.slice(0,12000):''})
  ].join('\n')});
  return true;
}

function statePlanError(path,detail) {
  const error=new Error('План состояний: '+path+' — '+detail+'.');
  error.code='MODEL_STATE_PLAN';
  return error;
}
function statePlanObject(value,path) {
  if(!value||typeof value!=='object'||Array.isArray(value))throw statePlanError(path,'ожидается объект');
  return value;
}
function normalizeStatePlan(plan,nodes,limit=24) {
  statePlanObject(plan,'ответ');
  if(!Array.isArray(plan.states))throw statePlanError('states','ожидается список состояний');
  if(plan.states.length>limit)throw statePlanError('states','получено '+plan.states.length+' состояний при лимите '+limit);
  const fieldId=(value,path,form=false)=>{
    const id=value==null&&form?'':typeof value==='number'&&Number.isSafeInteger(value)?String(value):typeof value==='string'?value.trim():undefined;
    if(id===undefined||(!nodes.has(id)&&!(form&&id==='')))throw statePlanError(path,'неизвестный field; используйте идентификатор из fields');
    return id;
  };
  const string=(value,path,allowEmpty=false)=>{
    if(typeof value!=='string'||value.length>3000||(!allowEmpty&&!value.trim()))throw statePlanError(path,'ожидается '+(allowEmpty?'строка':'непустая строка')+' до 3000 символов');
    return value;
  };
  const list=(value,path,map)=>{
    if(value==null)return [];
    if(Array.isArray(value))return value;
    return Object.entries(statePlanObject(value,path)).map(map);
  };
  const states=plan.states.map((input,index)=>{
    const path='states['+(index+1)+']';statePlanObject(input,path);
    const state={...input,name:string(input.name??input.title,path+'.name'),condition:string(input.condition??input.when,path+'.condition',true)};
    const values=input.values==null?{}:input.values;
    statePlanObject(values,path+'.values');state.values={};
    for(const [id,value] of Object.entries(values)) {
      const key=fieldId(id,path+'.values['+id+']');
      if(Object.prototype.hasOwnProperty.call(state.values,key))throw statePlanError(path+'.values','повторный field '+key);
      if(typeof value!=='string'&&!(typeof value==='number'&&Number.isFinite(value)))throw statePlanError(path+'.values['+id+']','значение должно быть текстом или числом');
      state.values[key]=string(String(value),path+'.values['+id+']',true);
    }
    const emptyVariants=[];
    state.variants=list(input.variants,path+'.variants',([field,variant])=>variant&&typeof variant==='object'?{field,...variant}:{field,variant}).map((choice,j)=>{
      const itemPath=path+'.variants['+(j+1)+']';statePlanObject(choice,itemPath);
      const field=fieldId(choice.field,itemPath+'.field');
      const key=choice.key==null||(typeof choice.key==='string'&&!choice.key.trim())?undefined:string(choice.key,itemPath+'.key');
      const axesInput=choice.axes??(choice.variant&&typeof choice.variant==='object'?choice.variant:undefined);
      let axes;
      if(axesInput!==undefined){statePlanObject(axesInput,itemPath+'.axes');axes={};for(const [axis,value] of Object.entries(axesInput)){if(!axis.trim()||!['string','boolean'].includes(typeof value))throw statePlanError(itemPath+'.axes','нужны названия осей и строковые/логические значения');axes[axis]=value;}}
      const variant=typeof choice.variant==='object'||choice.variant==null||(typeof choice.variant==='string'&&!choice.variant.trim())?undefined:string(choice.variant,itemPath+'.variant');
      if(!key&&!variant&&!Object.keys(axes||{}).length){emptyVariants.push({field,path:itemPath});return null;}
      return {...choice,field,key,variant,axes};
    }).filter(Boolean);
    state.properties=list(input.properties,path+'.properties',([field,values])=>({field,values})).map((patch,j)=>{
      const itemPath=path+'.properties['+(j+1)+']';statePlanObject(patch,itemPath);statePlanObject(patch.values,itemPath+'.values');
      return {...patch,field:fieldId(patch.field,itemPath+'.field'),values:{...patch.values}};
    });
    state.errors=list(input.errors,path+'.errors',([field,text])=>({field,text})).map((error,j)=>{
      const itemPath=path+'.errors['+(j+1)+']';statePlanObject(error,itemPath);
      if(error.text!==undefined&&error.message!==undefined&&error.text!==error.message)throw statePlanError(itemPath,'text и message противоречат друг другу');
      return {...error,field:fieldId(error.field,itemPath+'.field',true),text:string(error.text??error.message,itemPath+'.text')};
    });
    for(const empty of emptyVariants)if(!state.errors.some(error=>error.field===empty.field))throw statePlanError(empty.path,'не указано нужное состояние; используйте key или axes из fields');
    return state;
  });
  return {...plan,reply:plan.reply==null?'Предлагаю состояния для компонентов на макете.':string(plan.reply,'reply',true),states};
}

function reviewFlow({ raw }) {
  const source = lockedSource();
  if (!pendingFlow || typeof raw !== 'string' || raw.length > (pendingFlow.renderMode==='components'?80000:40000)) throw new Error('Некорректный ответ GigaCode.');
  const nodes = new Map(sourceFields(source).map(node=>[node.getPluginData('triplex-field-id'),node]));
  const plan = normalizeStatePlan(parseModelResponse(raw,pendingFlow.renderMode==='components'?80000:40000),nodes,pendingFlow.renderMode==='components'?96:24);
  restoreFlowDraftOverrides(plan,pendingFlow.draftOverrides);
  plan.states=plan.states.filter(state=>Object.keys(state.values).length||state.errors.length||state.variants.length||state.properties.length);
  for(const state of plan.states)validateStateBindings(state,nodes);
  completeInteractionStates(plan,nodes);
  for(const state of plan.states) validateStateBindings(state,nodes);
  if(pendingFlow.renderMode==='components')plan.states=splitComponentStates(plan.states,nodes);
  plan.states=uniqueChangedStates(plan.states,nodes);
  const modelReply=plan.reply;
  plan.reply=plan.states.length?'Подготовил вариантов: '+plan.states.length+'. Проверьте изменения ниже.':'Пока не удалось собрать новые варианты. Уточните нужные состояния в аналитике.';
  flow = { ...pendingFlow, states: plan.states, reply: plan.reply,modelReply,limitations:plan.limitations };
  pendingFlow = null;
  send('flowProposal', { reply: plan.reply, states: plan.states,renderMode:flow.renderMode,limitations:flow.limitations, mode:flow.mode, analytics:flow.analytics, fields:confirmedFlowFields(source), labels: Object.fromEntries(confirmedFlowFields(source).map(field=>[field.field,field.label])) });
}

function splitComponentStates(states,nodes) {
  const result=[];
  for(const state of states) {
    const ids=new Set([...Object.keys(state.values),...(state.variants||[]).map(v=>v.field),...(state.properties||[]).map(p=>p.field),...state.errors.map(e=>e.field).filter(Boolean)]);
    if(state.errors.some(error=>!error.field))throw new Error('Укажите компонент для каждой ошибки: общий текст формы нельзя отрисовать внутри поля.');
    for(const id of ids) {
      if(!nodes.has(id))continue;
      const errors=state.errors.filter(error=>error.field===id);
      for(const error of errors.length?errors:[undefined]) {
        const scoped={...state,field:id,values:Object.prototype.hasOwnProperty.call(state.values,id)?{[id]:state.values[id]}:{},variants:(state.variants||[]).filter(choice=>choice.field===id),properties:(state.properties||[]).filter(patch=>patch.field===id),errors:error?[error]:[]};
        scoped.displayName=error?'Ошибка':scoped.variants.some(v=>variantMatchesState(v.variant,'opened'))?'Раскрытый список':scoped.variants.some(v=>variantMatchesState(v.variant,'active'))?'Активный ввод':Object.prototype.hasOwnProperty.call(scoped.values,id)?scoped.values[id]===''?'Пустое поле':'Заполненное поле':state.name;
        result.push(scoped);
      }
    }
  }
  return result.sort((a,b)=>[...nodes.keys()].indexOf(a.field)-[...nodes.keys()].indexOf(b.field));
}

const componentStatePreviewCache=new Map();
let componentStateCacheSource;
function componentStateCacheKey(source,state) {
  const signature=approvedSource?.signature || layoutSignature(source);
  if(componentStateCacheSource!==signature){componentStatePreviewCache.clear();componentStateCacheSource=signature;}
  return JSON.stringify([state.field,state.values,state.variants,state.properties,state.errors]);
}
function rememberComponentStatePreview(key,png) {
  if(!png.length||png.length>1024*1024)return;
  componentStatePreviewCache.delete(key);componentStatePreviewCache.set(key,png);
  while(componentStatePreviewCache.size>96||[...componentStatePreviewCache.values()].reduce((total,item)=>total+item.length,0)>1024*1024)componentStatePreviewCache.delete(componentStatePreviewCache.keys().next().value);
}
async function makeComponentState(source,state) {
  const field=sourceFields(source).find(node=>node.getPluginData('triplex-field-id')===state.field);
  if(!field||typeof field.clone!=='function')throw new Error('Не удалось скопировать компонент состояния.');
  let copy;
  try {
    copy=field.clone();
    pixso.currentPage.appendChild(copy);
    copy.locked=false;copy.x=source.x+source.width+48;copy.y=source.y;
    const rendered=await applyStateToCopy(copy,state,field);
    if(rendered.errorsPending)throw new Error('В компоненте не найдено место для текста ошибки. Этот вариант пока нельзя отрисовать.');
    if(rendered.skipped)throw new Error('Не удалось применить значение к полю. Этот вариант пока нельзя отрисовать.');
    copy.clipsContent=false;
    await yieldToEditor();
    lockedSource();
    return copy;
  } catch(error) {if(copy&&!copy.removed)copy.remove();throw error;}
}
async function previewComponentState({index,edits,previewId}) {
  let copy;
  try {
    const source=lockedSource();
    if(!Number.isInteger(index)||!flow?.states?.[index])throw new Error('Состояние недоступно.');
    const state=editedFlowStates(edits)[index];
    const key=componentStateCacheKey(source,state),cached=componentStatePreviewCache.get(key);
    if(cached){send('flowPreview',{index,previewId,png:cached,component:true});return;}
    copy=await makeComponentState(source,state);
    if(typeof copy.exportAsync!=='function')throw new Error('Pixso не поддерживает экспорт компонента.');
    const png=Array.from(await copy.exportAsync(previewExportSettings(copy,640)));
    lockedSource();rememberComponentStatePreview(key,png);
    send('flowPreview',{index,previewId,png,component:true});
  } catch(error){send('flowPreview',{index,previewId,error:error.message,component:true});}
  finally{if(copy&&!copy.removed)copy.remove();}
}
async function createComponentStates() {
  const source=lockedSource();
  if(!flowApproved||!flow?.selected?.length)throw new Error('Выберите и утвердите состояния компонентов.');
  const copies=[],columns=new Map(),skippedStates=[];let columnX=source.x+source.width+48;
  try {
    for(const state of flow.selected) {
      lockedSource();
      let copy;
      try {
        const field=sourceFields(source).find(node=>node.getPluginData('triplex-field-id')===state.field);
        if(!field)throw new Error('Компонент больше не доступен.');
        copy=await makeComponentState(source,state);
        let column=columns.get(state.field);
        const isNewColumn=!column;
        if(!column)column={x:columnX,y:source.y};
        copy.x=column.x;copy.y=column.y;
        copy.name=(copyContext(field).label||'Компонент')+' / '+state.name+(state.errors[0]?' / '+state.errors[0].text:'');
        lockedSource();
        if(isNewColumn){columns.set(state.field,column);columnX+=Math.max(field.width,copy.width)+48;}
        column.y+=copy.height+32;
        copies.push(copy);
      } catch(error) {
        if(copy&&!copy.removed)copy.remove();
        // A changed source invalidates the batch; an unsupported individual state does not.
        lockedSource();
        skippedStates.push({field:state.field,name:state.name,reason:error.message});
      }
    }
  } catch(error){for(const copy of copies)if(!copy.removed)copy.remove();throw error;}
  flowApproved=false;
  send('statesCreated',{count:copies.length,groups:columns.size,components:true,skipped:skippedStates.length,skippedStates,errorsPending:0});
}

function validateStateBindings(state,nodes) {
  if(!Object.keys(state.values).length&&!state.errors.length&&!state.variants?.length&&!state.properties?.length)throw new Error('Состояние «'+state.name+'» не содержит применимых свойств или вариантов.');
  const variants=new Map();
  for(const choice of state.variants || []) {
    if(variants.has(choice.field))throw new Error('Для компонента переданы несколько вариантов одного состояния.');
    const node=nodes.get(choice.field);
    const variant=resolveStateVariant(node,choice);
    choice.variant=variant.name;
    if(choice.axes)delete choice.axes;
    variants.set(choice.field,variant);
  }
  if(state.properties!==undefined&&!Array.isArray(state.properties))throw new Error('Некорректные свойства состояния.');
  const seen=new Set();
  for(const patch of state.properties || []) {
    const node=nodes.get(patch?.field);
    if(!node||seen.has(patch.field)||!patch.values||typeof patch.values!=='object'||Array.isArray(patch.values))throw new Error('Некорректные свойства состояния.');
    seen.add(patch.field);
    const variant=variants.get(patch.field);
    const definitions=variant ? new Map(editableProperties(variant)) : new Map(Object.entries(node.componentProperties||{}));
    for(const [key,value] of Object.entries(patch.values)) {
      const type=definitions.get(key)?.type;
      if(type==='BOOLEAN'?typeof value!=='boolean':type!=='TEXT'||typeof value!=='string'||value.length>3000)throw new Error('Свойство состояния «'+key+'» недоступно.');
    }
  }
}

function selectFlow(selection, states = flow.states) {
  if (!Array.isArray(selection) || selection.length !== states.length) throw new Error('Проверьте выбор состояний.');
  return states.flatMap((state, i) => {
    const choice = selection[i];
    if (typeof choice?.included !== 'boolean' || !Array.isArray(choice.errors) || choice.errors.length !== state.errors.length || choice.errors.some(v => typeof v !== 'boolean')) throw new Error('Проверьте выбор ошибок.');
    if (!choice.included) return [];
    const errors = state.errors.filter((_, j) => choice.errors[j]);
    // A rejected error must not leave its error variant in the generated screen.
    if (state.errors.length && !errors.length) return [];
    const rejected = new Set(state.errors.filter((_, j) => !choice.errors[j]).map(e => e.field));
    return [{ ...state, errors, variants: (state.variants || []).filter(v => !rejected.has(v.field)), properties:(state.properties || []).filter(patch=>!rejected.has(patch.field)) }];
  });
}

async function applyStateToCopy(copy,state,source) {
  let skipped=0;
  let errorsPending=0;
  const fields = new Map(sourceFields(copy).map(n => [n.getPluginData('triplex-field-id'), n]));
  const sizes = [...fields.values()].map(n => [n, n.width, n.height]);
  const expandedFields=new Set((state.variants||[]).filter(choice=>variantMatchesState(choice.variant,'opened')).map(choice=>choice.field));
  for(const patch of state.properties||[])if(Object.entries(patch.values).some(([key,value])=>value===true&&componentStateCapabilities(fields.get(patch.field)).opened.includes(key)))expandedFields.add(patch.field);
  for (const choice of state.variants || []) {
    const field = fields.get(choice.field);
    const variant = field && resolveStateVariant(field,choice);
    if (!variant || typeof field.swapComponent !== 'function') throw new Error('Недоступен вариант «' + choice.variant + '». Уточните состояние в чате.');
    const copySnapshot=await captureFieldCopy(field);
    field.swapComponent(variant);
    await restoreFieldCopy(field,copySnapshot);
  }
  for(const patch of state.properties || []) {
    const field=fields.get(patch.field);
    if(!field)throw new Error('Компонент состояния больше не доступен.');
    await setInstanceValues(field,patch.values,field.name || patch.field);
  }
  for (const [id, value] of Object.entries(state.values)) {
    if(!await writeStateText(fields.get(id),'value',value)) skipped++;
  }
  const annotations = [state.condition];
  const errorsByField=new Map();
  for(const error of state.errors) {
    const messages=errorsByField.get(error.field)||[];messages.push(error.text);errorsByField.set(error.field,messages);
  }
  for (const [id,messages] of errorsByField) {
    const field=fields.get(id);
    const text=messages.join('\n');
    if(field) {
      const props=Object.entries(field.componentProperties || {});
      const toggles=Object.fromEntries(props.filter(([name,prop])=>prop.type==='BOOLEAN'&&!/^(?:hide|no|not|without|disable)/i.test(name)&&(/error|invalid|ошиб|show[ _-]?(?:description|helper)|description[ _-]?(?:visible|enabled)/i.test(name)||stateRolePatterns.description.test(name))).map(([name])=>[name,true]));
      if(Object.keys(toggles).length)field.setProperties(toggles);
    }
    if(!await writeStateText(field,'error',text))errorsPending+=messages.length;
    annotations.push((field?.getPluginData('triplex-field-label') || 'Форма') + ' — ' + text);
  }
  for (const [node, width, height] of sizes) node.resizeWithoutConstraints(width,(node===copy&&copy.type==='INSTANCE')||expandedFields.has(node.getPluginData('triplex-field-id'))?Math.max(height,node.height):height);
  if(expandedFields.size)copy.clipsContent=false;
  copy.resizeWithoutConstraints(source.width,copy.type==='INSTANCE'?Math.max(source.height,copy.height,Number(copy.mainComponent?.height)||0):source.height);
  copy.setPluginData('triplex-flow-errors', JSON.stringify(state.errors));
  return {skipped,errorsPending,annotations};
}

async function writeStateText(field,role,value) {
  if(!field)return false;
  const patterns=role==='error'?[stateRolePatterns.description,stateRolePatterns.error]:[stateRolePatterns.value];
  const props=Object.entries(field.componentProperties || {});
  for(const pattern of patterns) {
    const matches=props.filter(([name,prop])=>prop.type==='TEXT'&&pattern.test(name));
    if(matches.length===1){await setInstanceValues(field,{[matches[0][0]]:value},field.name || role);return true;}
    if(matches.length>1)return false;
  }
  // Some Pixso libraries expose Description only as a nested TEXT layer.
  // Change only an unambiguous semantic layer inside the cloned instance.
  for(const pattern of patterns) {
    const direct=[],grouped=[];const stack=[{node:field,parents:[]}];let visited=0;
    while(stack.length) {
      const {node,parents}=stack.pop();
      if(node.type==='TEXT') {
        const match={node,parents};
        if(pattern.test(node.name || ''))direct.push(match);
        else if(parents.some(parent=>pattern.test(parent.name || '')))grouped.push(match);
      }
      for(const child of node.children || [])stack.push({node:child,parents:[...parents,node]});
      if(direct.length>1)break;
      if(++visited%100===0)await yieldToEditor();
    }
    const matches=direct.length?direct:grouped;
    if(matches.length===1){
      const {node,parents}=matches[0];
      await setTextLayerValue(node,value);
      node.visible=true;
      for(const parent of parents)if(pattern.test(parent.name || ''))parent.visible=true;
      return true;
    }
    if(matches.length>1)return false;
  }

  return false;
}

async function createStates() {
  if(flow?.renderMode==='components')return createComponentStates();
  const source = lockedSource();
  if (!flowApproved || !flow?.selected?.length) throw new Error('Выберите и утвердите состояния и ошибки.');
  const copies = [];
  const notes = [];
  let skipped = 0;
  let errorsPending = 0;
  try {
    for (const [index, state] of flow.selected.entries()) {
      const copy = source.clone();
      copies.push(copy);
      copy.locked = false;
      copy.name = String(index + 2).padStart(2, '0') + ' · ' + state.name;
      copy.x = source.x + (index + 1) * (source.width + 48);
      copy.y = source.y;
      const rendered=await applyStateToCopy(copy,state,source);
      skipped+=rendered.skipped; errorsPending+=rendered.errorsPending;
      const annotations=rendered.annotations;
      await pixso.loadFontAsync({ family: 'Inter', style: 'Regular' });
      const note = pixso.createText();
      notes.push(note);
      note.fontName = { family: 'Inter', style: 'Regular' };
      note.fontSize = 14;
      note.characters = annotations.join('\n');
      note.resize(copy.width, note.height);
      note.textAutoResize = 'HEIGHT';
      note.x = copy.x;
      note.y = copy.y + copy.height + 16;
      note.name = 'Условия и ошибки · ' + state.name;
      lockedSource();
    }
  } catch (error) {
    for (const node of [...copies, ...notes]) node.remove();
    throw error;
  }
  flowApproved = false;
  send('statesCreated', { count: copies.length, skipped, errorsPending });
}

async function prepare({ task, standard }) {
  if (typeof task !== 'string' || !task.trim() || task.length > 3000) {
    throw new Error('Опишите задачу (до 3000 символов).');
  }
  const frame = getActiveForm(activeFormId);
  const body = findFormBody(frame);
  if (!activeLibraryAssets && typeof activeLightboxComponent?.getLibraryInfoAsync === 'function' &&
      typeof pixso.getLibraryByKeyAsync === 'function') {
    const library = await activeLightboxComponent.getLibraryInfoAsync();
    if (library?.key) activeLibraryAssets = (await pixso.getLibraryByKeyAsync(library.key))?.componentList;
  }
  getActiveForm(frame.id);
  if (!isFormBody(frame, body)) throw new Error('Фрейм изменился. Запросите компоненты заново.');
  const catalog = libraryCatalog(activeLibraryAssets);
  if (!catalog.length) throw new Error('Pixso не вернул доступные компоненты из библиотеки установленного LightBox (кнопки исключены).');
  conversation = [{ role: 'user', text: task.trim() }];
  prepared = { frameId: frame.id, bodyId: body.id, catalog, task: task.trim(), standard: typeof standard === 'string' ? standard.trim().slice(0, 8000) : flow?.standard };
  sendPlanRequest();
}

function sendPlanRequest(revision) {
  prepared.requireCatalogIdentity=true;
  const { task, catalog, items } = prepared;
  const components = modelCatalog(catalog);
  const prompt = [
    'Предложи состав экрана по задаче из доступных компонентов Triplex: ввод, отображение данных, структура и другие нужные элементы.',
    'Выбирай строки ТОЛЬКО из текущего components. Для каждого элемента передай key из строки и component, равный её doc (или точному name, если doc:null). ID — позиция в этом запросе; не бери номера из справочника, примеров или старой переписки. Верни до 12 элементов.',
    'Ответь только JSON: {"reply":"Пояснение или вопрос","items":[{"key":"ключ из каталога","component":"тип из doc","text":"Подпись поля","placeholder":"Например, ООО Ромашка","value":"ООО Ромашка","readOnly":false,"error":"Условие — сообщение","optionExample":""}]}.',
    'Подписи на русском, до 120 символов в одну строку. Если подходящих компонентов нет, верни {"reason":"причина"}.',
    'Следуй textStandard для всех подписей и подсказок. Сохраняй термины бизнес-требований.',
    'Для заполняемых полей предложи вымышленное значение value по задаче. Плейсхолдер и значение — разные свойства. Если нужен пустой экран или компонент не принимает текстовое значение, пропусти value.',
    'Для текстовых полей предложи короткую подсказку по задаче. Используй точный плейсхолдер, если пользователь его указал. Для кнопок и чекбоксов пропусти placeholder.',
    'Не предлагай кнопки, ошибки и состояния: они согласуются отдельно после верстки. error всегда пустой.',
    'Выбирай тип по назначению из справочника Triplex. В reply коротко поясни только важные решения в 2–4 пунктах, каждый с новой строки. Не повторяй весь набор и числовые ID: список компонентов покажет плагин. Если нужного экземпляра нет в Pixso, сообщи об этом; не подменяй его обычным полем.',
    'Для поля только для чтения укажи readOnly: true. Для списка кошельков укажи в optionExample короткий вымышленный пример пункта с именем, ID и балансом.',
    'Если есть revision, отредактируй текущий список по этим правкам и верни весь новый список. Сохрани позиции, которые пользователь не просил менять.',
    JSON.stringify({
      task, components, revision, conversation:modelConversation(task), requirements: flow?.requirements, textStandard: prepared.standard, states: flow?.states.map(({ name, condition }) => ({ name, condition })),
      currentItems: revision ? items.map(({ id, text, placeholder, value, readOnly, error, optionExample }) => ({ id, text, placeholder, value, readOnly, error, optionExample })) : undefined
    })
  ].join('\n');
  send('prepared', { prompt });
}

function parseModelResponse(raw,limit=40000) {
  const fail=()=>{const error=new Error('Не удалось прочитать JSON ответа GigaCode. Ответ отправляется на проверку формата; если ошибка повторится, повторите запрос.');error.code='MODEL_JSON';return error;};
  if(typeof raw!=='string'||raw.length>limit)throw fail();
  const text=raw.replace(/^\uFEFF/,'').trim();
  const parse=value=>{let result=JSON.parse(value);if(typeof result==='string')result=JSON.parse(result);return result;};
  try {return parse(text);} catch {}
  const fenced=text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if(fenced){try{return parse(fenced[1]);}catch{throw fail();}}
  const start=text.search(/[\[{]/);
  if(start<0)throw fail();
  const stack=[];let quoted=false,escaped=false;
  for(let i=start;i<text.length;i++) {
    const char=text[i];
    if(quoted){if(escaped)escaped=false;else if(char==='\\')escaped=true;else if(char==='"')quoted=false;continue;}
    if(char==='"'){quoted=true;continue;}
    if(char==='{'||char==='[')stack.push(char);
    if(char==='}'||char===']') {
      const open=stack.pop();if(open!==(char==='}'?'{':'['))throw fail();
      if(!stack.length){
        if(/^[\s]*[\[{]/.test(text.slice(i+1)))throw fail();
        try{return parse(text.slice(start,i+1));}catch{throw fail();}
      }
    }
  }
  throw fail();
}

function componentValueType(value) {return typeof value==='boolean'?'BOOLEAN':typeof value==='string'?'TEXT':undefined;}
function mapReplacementValues(values,fields,previous,targetName) {
  const oldFields=new Map(editableProperties(previous.variants[previous.variant]));
  const base=key=>key.replace(/#.*$/,'').replace(/[ _-]/g,'').toLowerCase();
  const mapped={},skipped=[];
  for(const [key,value] of Object.entries(values)) {
    const type=componentValueType(value);
    if(!type||(type==='TEXT'&&value.length>3000))throw revisionFormatError('Некорректное значение свойства «'+key+'».');
    let target=fields.has(key)?key:undefined;
    if(!target){const matches=[...fields].filter(([name,prop])=>base(name)===base(key)&&prop.type===type);if(matches.length===1)target=matches[0][0];}
    if(!target&&type==='TEXT'&&componentKnowledge({name:targetName})?.name==='Text'&&/^(?:value|amount|sum|значение|сумма)$/i.test(base(key))) {
      const displayFields=[...fields].filter(([name,prop])=>prop.type==='TEXT'&&/^(?:text|content|value|текст|значение)$/i.test(base(name)));
      if(displayFields.length===1)target=displayFields[0][0];
    }
    if(target&&fields.get(target)?.type===type){mapped[target]=value;continue;}
    const oldMatch=[...oldFields].some(([name,prop])=>(name===key||base(name)===base(key))&&prop.type===type);
    if(oldMatch){skipped.push(key.replace(/#.*$/,''));continue;}
    throw revisionFormatError('Свойство «'+key+'» отсутствует у нового компонента. При замене передай uid, key, component; настройки нового типа согласуются после замены.');
  }
  return {mapped,skipped};
}

function normalizeModelLabel(item, index, previous) {
  // Some CLI responses call the visible label `label` or `title`.
  // Never use `name`: it may be the library component name, not the user's label.
  const supplied = [item?.text, item?.label, item?.title].filter(value => value !== undefined && value !== null && value !== '');
  let text = supplied[0];
  if (text === undefined || (typeof text === 'string' && !text.trim())) text = previous?.text;
  const fail = reason => {
    const error = new Error('Компонент №' + (index + 1) + (item?.id != null ? ' (id=' + item.id + ')' : '') + ': ' + reason + '. Нужна подпись в text, например «ИНН плательщика».');
    error.code = 'MODEL_LABEL';
    throw error;
  };
  if (text === undefined) fail('модель не передала подпись');
  if (typeof text !== 'string') fail('подпись должна быть строкой, получен ' + (Array.isArray(text) ? 'массив' : typeof text));
  text = text.replace(/\\r\\n|\\n|\\r/g, ' ').replace(/\s+/g, ' ').trim();
  if (!text) fail('подпись пуста');
  if ([...text].length > 120) fail('подпись слишком длинная (' + [...text].length + ' символов, максимум 120)');
  return text;
}

function requestLabelRepair(message, error) {
  if (!['MODEL_LABEL', 'MODEL_REVISION', 'MODEL_NO_CHANGE', 'MODEL_IDENTITY', 'MODEL_JSON'].includes(error.code) || !prepared || !['review', 'reviewDialog'].includes(message.type) || prepared.labelRepairAttempted) return false;
  prepared.labelRepairAttempted = true;
  const dialog = message.type === 'reviewDialog';
  const prompt = [
    'Исправь формат своего ответа. Не меняй смысл задачи и ранее согласованные решения.',
    'Ошибка проверки: ' + error.message,
    'Проверь, что твои items/updates действительно отличаются от текущих components/currentItems по последней просьбе пользователя. Нельзя сообщать об успешной замене, оставляя прежние key/id. Если просьба уже выполнена или требует уточнения, верни action:reply, needsClarification:true и объяснение.',
    'СВЕРЬ ССЫЛКИ: key, id и component должны относиться к ОДНОЙ строке текущего catalog. component копируй из doc или полного name. Старые номера и номера из справочника недействительны. Не меняй требуемый смысл компонента ради ошибочного ID.',
    'Используй только uid,id,key,component,text,placeholder,value,readOnly,optionExample,values,variant. catalogId/componentId означают id типа. name/confirmed/reason — метаданные, их можно опустить. Для удаления исключи uid из итогового items. Не отменяй правки пользователя.',
    'У каждой новой строки items обязательны key, component и непустой text: видимая подпись до 120 символов. Не передавай объект вместо строки. Для существующей строки с uid можно пропустить text, тогда сохранится прежняя подпись.',
    dialog ? 'Верни JSON с action:list, reply и полным итоговым items с учётом последних правок пользователя. Для замены типа передай uid и новый key с component.' : 'Верни JSON с reply и полным items: [{key:"ключ из catalog",component:"doc или точное name",text:"Подпись",placeholder:""}].',
    JSON.stringify({ latestRequest:[...conversation].reverse().find(message=>message.role==='user')?.text, task: prepared.task, standard: prepared.standard, conversation:modelConversation(),
      catalog: modelCatalog(prepared.catalog), currentItems: prepared.items?.map(({uid,id,text}) => ({uid,id,text})),
      invalidResponse: typeof message.raw === 'string' ? message.raw.slice(0, 8000) : '' })
  ].join('\n');
  send(dialog ? 'dialogRequest' : 'prepared', { prompt, repairing: true });
  return true;
}

async function review(raw) {
  if (!prepared) throw new Error('Сначала запросите компоненты.');
  if (typeof raw !== 'string' || raw.length > 30000) throw new Error('Некорректный ответ GigaCode.');
  const plan=parseModelResponse(raw,30000);
  if (typeof plan?.reason === 'string') throw new Error(plan.reason.slice(0, 200));
  if (!Array.isArray(plan?.items) || plan.items.length > 12) {
    throw new Error('В плане должно быть не больше 12 полей.');
  }
  const items = plan.items.map((item, index) => {
    const text = normalizeModelLabel(item, index);
    const id=resolveCatalogIdentity(item,prepared.catalog,prepared.requireCatalogIdentity===true);
    const placeholder = item.placeholder;
    if (placeholder != null &&
        (typeof placeholder !== 'string' || placeholder.length > 120 || /[\r\n]/.test(placeholder))) {
      throw new Error('GigaCode вернул некорректный плейсхолдер.');
    }
    const value = item.value;
    if (value != null && (typeof value !== 'string' || value.length > 120 || /[\r\n]/.test(value))) {
      throw new Error('GigaCode вернул некорректное моковое значение.');
    }
    return { id, text, placeholder: placeholder?.trim(), value: value?.trim(), readOnly: item.readOnly === true, optionExample: typeof item.optionExample === 'string' ? item.optionExample.slice(0, 240) : '', error: '' };
  });
  const parts = new Map();
  for (const id of new Set(items.map(item => item.id))) {
    const asset = prepared.catalog[id - 1];
    const reused=prepared.items?.find(item=>item.id===id);
    if(reused){parts.set(id,{variants:reused.variants,name:reused.name});continue;}
    await yieldToEditor();
    let component;
    let set;
    try {
      if (asset.type === 'COMPONENT_SET' && typeof pixso.importComponentSetByKeyAsync === 'function') {
        set = await pixso.importComponentSetByKeyAsync(asset.key);
        component = set?.defaultVariant;
      } else if (asset.type === 'COMPONENT_SET') {
        const variants = Array.from(asset.variants || []).filter(variant => variant.key);
        if (variants.length !== 1) throw new Error('API Pixso не предоставляет importComponentSetByKeyAsync.');
        component = await resolveComponent(variants[0]);
      } else {
        component = await resolveComponent(asset);
        if (component.parent?.type === 'COMPONENT_SET') set = component.parent;
      }
    } catch (error) {
      throw new Error('Импорт «' + asset.name + '»: ' + (error.message || String(error)));
    }
    if (component?.type !== 'COMPONENT') throw new Error('Компонент недоступен: ' + asset.name);
    const variants = [component, ...Array.from(set?.children || []).filter(node =>
      node.type === 'COMPONENT' && node.id !== component.id)];
    parts.set(id, { variants, name: asset.name });
  }
  prepared.items = items.map(item => {
    const part = parts.get(item.id);
    const variant = item.readOnly ? part.variants.findIndex(component => isReadOnly(component.name)) : 0;
    return { ...part, ...item, uid: ++itemSequence, variant: Math.max(0, variant) };
  });
  prepared.stage = "list";
  const previews = prepared.items.map(describeSummary);
  conversation.push({ role: 'assistant', text: plan.reply || '' });
  if (!prepared.importOnly) send('proposal', { target: pixso.getNodeById(prepared.bodyId)?.name, items: previews, reply: 'Предложено компонентов: '+previews.length+'. Проверьте текущий набор ниже.' });
}

function resolveRemovalRequest(revision, items, catalog) {
  if (/(?:^|\s)(?:замени|заменить|добавь|добавить|оставь|не\s+(?:убирай|удаляй))/i.test(revision)) return null;
  // Only a complete list of explicit removal commands is executed locally.
  // Mixed edits, prose, negation and unsupported grammar remain model requests.
  const blocks = [];
  let pending = [];
  const lines = revision.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  for (const line of lines) {
    const prefix = line.match(/^(?:убери|удали|убрать|удалить)\s+(.+?)[.!]?$/i);
    const suffix = line.match(/^(.*?)\s*(?:убери|удали|убрать|удалить)[.!]?$/i);
    if (prefix) {
      if (pending.length) return null;
      blocks.push([prefix[1]]);
    } else if (suffix) {
      if (suffix[1].trim()) pending.push(suffix[1].trim());
      if (!pending.length || pending.length > 2) return null;
      blocks.push(pending);pending=[];
    } else {
      pending.push(line);
      if (pending.length > 2) return null;
    }
  }
  if (pending.length || !blocks.length) return null;
  const norm = text => String(text || '').toLowerCase().replace(/ё/g,'е').replace(/[«»“”"]/g,'').replace(/\s+/g,' ').trim();
  const typeMatches = (item, target) => {
    const doc = catalog[item.id-1]?.knowledgeName || componentKnowledge({name:item.name})?.name;
    return norm(item.name) === norm(target) || (doc && norm(doc) === norm(target));
  };
  const selected = new Set();
  const unresolved = [];
  for (const block of blocks) {
    let target = block.at(-1);
    const all = /^все\s+/i.test(target);
    if (all) target=target.replace(/^все\s+/i,'');
    let matches;
    if (block.length===2) matches=items.filter(item=>norm(item.text)===norm(block[0]) && typeMatches(item,target));
    else {
      matches=items.filter(item=>typeMatches(item,target));
      if (!matches.length) matches=items.filter(item=>norm(item.text)===norm(target));
    }
    if (!matches.length || (matches.length>1 && !all)) {
      unresolved.push(block.join(' · ') + (matches.length ? ' — несколько компонентов с таким названием' : ' — точное совпадение не найдено'));
    } else for(const item of matches) selected.add(item.uid);
  }
  return { uids:[...selected], unresolved };
}

async function requestConversation({ revision }) {
  await yieldToEditor();
  if (!prepared?.items || typeof revision !== 'string' || !revision.trim()) throw new Error('Введите сообщение.');
  prepared.labelRepairAttempted = false;
  prepared.revisionPending = true;
  conversation.push({ role: 'user', text: revision.trim() });
  const removal = resolveRemovalRequest(revision, prepared.items, prepared.catalog);
  if (removal) {
    if (removal.unresolved.length) {
      const reply='Пока ничего не удалено. Уточните компонент по подписи и типу либо используйте корзину:\n' + removal.unresolved.map(text=>'• '+text).join('\n');
      conversation.push({role:'assistant',text:reply});
      send('dialogReply',{reply,revisionPending:true});
    } else {
      await reviewListRevision({action:'list',reply:'',items:prepared.items.filter(item=>!removal.uids.includes(item.uid)).map(item=>({uid:item.uid}))});
    }
    return;
  }
  prepared.requireCatalogIdentity=true;
  const configuring = prepared.stage !== 'list';
  const definitions = {};
  const components = [];
  for (const item of prepared.items) {
    const result = {
      uid: item.uid, id: item.id, key:prepared.catalog[item.id-1]?.key, component:prepared.catalog[item.id-1]?.knowledgeName || item.name, name: item.name, text: item.text, placeholder: item.placeholder,
      value: item.value, readOnly: item.readOnly, error: item.error,
      optionExample: item.optionExample, confirmed: item.confirmed
    };
    if (configuring) {
      const description = describeItem(item);
      result.variant = item.variant;
      result.fields = description.fields;
      result.values = item.values;
      if (!definitions[item.id]) definitions[item.id] = description.variants;
    }
    components.push(result);
    await yieldToEditor();
  }
  send('dialogRequest', { prompt: [
    'Ты согласуешь форму с пользователем. Учитывай всю историю и текущие настройки. Последняя просьба уточняет предыдущие.',
    'Сначала сопоставь каждую просьбу с конкретным uid. Подпись text и тип name — разные признаки: одинаковая подпись может быть у Text, Amount и поля ввода. Пара строк «подпись / тип» обозначает один компонент. Удаление Amount не означает удаление Text с той же подписью. Удаление Island не означает удаление других строк набора: это плоский список, не дерево.',
    'При просьбе только удалить не меняй подписи, типы, значения, примеры опций и настройки остальных строк. Верни оставшиеся строки как {uid}, не переписывай их целиком. Проверь, что учёл каждую просьбу, включая контейнеры. При неоднозначности задай вопрос вместо догадки.',
    'Ответь одним JSON. Для точечных изменений: {"reply":"краткий ответ","action":"configure","updates":[{"uid":1,"text":"Новая подпись"}]}. Для полного набора: {"reply":"краткий ответ","action":"list","items":[{"uid":1}]}. Для вопроса: {"reply":"вопрос","action":"reply","needsClarification":true}. Не включай пустые поля из других форматов.',
    'reply — вопрос или объяснение без изменений. configure — изменения свойств, текстов, ошибок любого существующего компонента.',
    'Для точечных правок передавай action:configure и updates только изменяемых строк. Каждый update содержит uid и изменяемые поля: text, placeholder, value, readOnly; для замены типа — key и component. На этапе свойств можно также менять values и variant.',
    'При замене типа НЕ передавай values и variant от старого компонента. Передай uid, key, component и изменяемые подписи/значения; новый компонент будет настроен отдельно. TextView — отображение текста, не TextField для ввода. Если в каталоге это Text, укажи component:Text и его key.',
    'При добавлении и замене типа обязательно передай component из doc и key из той же строки каталога. ID не переносится между каталогами. Для сохранения существующего поля достаточно uid. Весь тип сверяется кодом до импорта.',
    'updates содержит только изменяемые поля. values использует точные ключи fields. variant — индекс из variants. Не выдумывай ключи и варианты.',
    'Для добавления или изменения порядка верни action:list и полный итоговый items. Для удаления исключи uid из полного items либо передай updates:[{uid,remove:true}]. В полном items {uid} сохраняет прежнюю строку; замена требует uid, key и component, новая строка — key, component и text.',
    'Замены и удаление можно передавать точечно через updates; полный items требуется только если выбран action:list. Не сообщай о замене только в reply. Если нужен уточняющий вопрос, верни action:reply, needsClarification:true и reply с вопросом. Не утверждай, что что-то изменено, без изменений в items/updates.',
    'Пример: убрать BodyPage и Island — исключить их uid; заменить MaskedField — сохранить uid поля и указать id TextField. Для расчётного счёта выбрать id SuggestField. Указания пользователя важнее рекомендации справочника. Краткий ответ разбивай на абзацы; не дублируй весь каталог в reply.',
    'uid — уникальный номер уже добавленного поля из components. catalogId/id — тип из каталога. Несколько Text Field могут иметь один catalogId, но разные uid. Копируй uid из components, не используй порядковый номер или catalogId вместо него. Каждый uid в items встречается один раз. Для нового поля передавай только id без uid; для замены существующего — uid и новый id.',
    'Используй один формат изменений: updates либо полный items. Сохраняй все незатронутые решения. Если выполнить просьбу по доступным свойствам нельзя, задай уточняющий вопрос с needsClarification:true.',
    'Кнопки запрещены. Не предлагай ошибки и состояния до закрепления верстки. Выбирай специализированные компоненты по смыслу, не заменяй выбор, даты и переключатели TextField. По вопросу о TextField объясни выбор на основе переданного каталога.',
    JSON.stringify({ latestRequest:revision.trim(), conversation:modelConversation(), task: prepared.task, standard: prepared.standard, stage: prepared.stage, components, variantsByCatalogId: definitions,
      catalog: modelCatalog(prepared.catalog) })
  ].join('\n') });
}

function comparableComponentSettings(item) {
  const values = Object.entries(item.values || {}).sort(([a], [b]) => a.localeCompare(b));
  return JSON.stringify([item.text, item.placeholder, item.value, item.readOnly, item.optionExample, item.variant, values]);
}

function revisionSummary(before, after) {
  const old = new Map(before.map(item => [item.uid, item]));
  const next = new Map(after.map(item => [item.uid, item]));
  const changes = [];
  for (const item of before) if (!next.has(item.uid)) changes.push('Удалён: ' + item.text + ' · ' + item.name);
  for (const item of after) {
    const previous = old.get(item.uid);
    if (!previous) changes.push('Добавлен: ' + item.text + ' · ' + item.name);
    else if (previous.id !== item.id) changes.push('Заменён: ' + item.text + ' · ' + previous.name + ' → ' + item.name);
    else if (comparableComponentSettings(previous) !== comparableComponentSettings(item)) changes.push('Обновлён: ' + item.text);
  }
  if (!changes.length && before.map(item => item.uid).join(',') !== after.map(item => item.uid).join(',')) changes.push('Изменён порядок компонентов.');
  return changes;
}

function revisionFormatError(message) {
  const error = new Error(message);
  error.code = 'MODEL_REVISION';
  return error;
}

function revisionNotApplied(message) {
  const error = revisionFormatError(message);
  error.code = 'MODEL_NO_CHANGE';
  return error;
}

function normalizeRevisionEntry(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw revisionFormatError('Строка правок должна быть объектом.');
  const result = {};
  const aliases = { catalogId: 'id', componentId: 'id', componentKey:'key', componentName:'component' };
  // These are descriptive fields sent to the model, not editable settings.
  const metadata = new Set(['name', 'confirmed', 'reason', 'explanation', 'knowledgeName', 'doc', 'fields', 'variants', 'copy', 'missing']);
  const editable = new Set(['uid','id','key','component','text','label','title','placeholder','value','readOnly','optionExample','values','variant','error','remove']);
  for (const [source, value] of Object.entries(entry)) {
    if (metadata.has(source)) continue;
    if (source === 'action' || source === 'operation') {
      if (['remove','delete'].includes(value)) {
        if (result.remove === false) throw revisionFormatError('Противоречивое указание удаления компонента.');
        result.remove = true;
      } else if (!['keep','replace','add','update'].includes(value)) throw revisionFormatError('Неизвестная операция над компонентом: ' + String(value));
      continue;
    }
    const key = aliases[source] || source;
    if (!editable.has(key)) throw revisionFormatError('Не удалось разобрать свойство «' + source + '» в правках компонента.');
    const normalized = ['uid','id','variant'].includes(key) && typeof value === 'string' && /^\d+$/.test(value.trim()) ? Number(value.trim()) : value;
    if (Object.prototype.hasOwnProperty.call(result, key) && result[key] !== normalized) throw revisionFormatError('Противоречивые значения «' + key + '» в правках компонента.');
    result[key] = normalized;
  }
  if (result.remove !== undefined && typeof result.remove !== 'boolean') throw revisionFormatError('Признак remove должен быть true или false.');
  return result;
}

function normalizeRevisionResponse(response, currentItems, stage) {
  if (response.updates !== undefined) {
    if (!Array.isArray(response.updates)) throw revisionFormatError('updates должен быть списком правок.');
    response.updates = response.updates.map(normalizeRevisionEntry);
  }
  if (response.items !== undefined) {
    if (!Array.isArray(response.items)) throw revisionFormatError('items должен быть итоговым списком.');
    response.items = response.items.map(normalizeRevisionEntry);
  }
  // A structural patch is also valid: expand it to the complete authoritative list.
  if ((response.action === 'configure' && response.updates?.length && (stage === 'list' || response.updates.some(change => change.id !== undefined || change.key !== undefined || change.component !== undefined || change.remove === true))) ||
      (response.action === 'list' && response.items === undefined && response.updates?.length)) {
    if (response.items?.length) throw revisionFormatError('Переданы одновременно структурные updates и непустой items. Нужен один итоговый список.');
    response.action = 'list';
    response.items = currentItems.map(item => ({ uid: item.uid }));
  }
  return response;
}


async function reviewListRevision(response) {
  const context = prepared;
  if (response.action === 'reply' && response.needsClarification === true && !response.items?.length && !response.updates?.length) {
    conversation.push({ role: 'assistant', text: response.reply });
    send('dialogReply', { reply: response.reply, revisionPending: true });
    return;
  }
  if (response.action !== 'list' || !Array.isArray(response.items) || response.items.length > 12) {
    throw revisionNotApplied('Модель ответила текстом, но не передала новый набор или updates. Передай фактические правки, либо action:reply с needsClarification:true и уточняющим вопросом.');
  }
  const existing = new Map(context.items.map(item => [item.uid, item]));
  const seen = new Set();
  const normalize = value => typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : value;
  const changes = new Map();
  if (response.updates !== undefined && !Array.isArray(response.updates)) throw new Error('Некорректные изменения.');
  for (const change of response.updates || []) {
    const uid = normalize(change?.uid);
    if (!existing.has(uid) || changes.has(uid)) throw new Error('Некорректный uid в изменениях.');
    changes.set(uid, change);
  }
  const rows = response.items.map((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw new Error('Некорректная строка нового набора.');
    const uid = entry.uid === undefined ? undefined : normalize(entry.uid);
    const previous = existing.get(uid);
    if (uid !== undefined && (!previous || seen.has(uid))) throw new Error('Неизвестный или повторяющийся uid в новом наборе.');
    if (uid !== undefined) seen.add(uid);
    const patch = { ...changes.get(uid), ...entry };
    if (patch.remove === true) {
      if (!previous) throw revisionFormatError('Для удаления нужен uid существующего компонента.');
      return { remove: true };
    }
    delete patch.remove;
    const reference={...patch};
    if(reference.id===undefined&&reference.key===undefined)reference.id=previous?.id;
    const changesType=!previous||patch.key!==undefined||patch.component!==undefined||(patch.id!==undefined&&patch.id!==previous.id);
    const id=resolveCatalogIdentity(reference,context.catalog,context.requireCatalogIdentity===true&&changesType);
    const text = normalizeModelLabel(patch, index, previous);
    if (['text', 'label', 'title'].some(key => patch[key] !== undefined)) patch.text = text;
    delete patch.label;
    delete patch.title;
    const spec = { ...previous, ...patch, text, id, uid };
    for (const key of ['placeholder', 'value', 'optionExample']) {
      if (spec[key] != null && (typeof spec[key] !== 'string' || spec[key].length > (key === 'optionExample' ? 240 : 120) || /[\r\n]/.test(spec[key]))) throw new Error('Некорректный текст компонента.');
    }
    if (spec.readOnly !== undefined && typeof spec.readOnly !== 'boolean') throw new Error('Некорректный read-only.');
    return { previous, patch, spec, replace: !previous || previous.id !== id };
  }).filter(row => !row.remove);
  for (const uid of changes.keys()) if (!seen.has(uid)) throw new Error('Изменение ссылается на удалённый компонент.');
  // Import into a temporary plan. Never partially replace the authoritative set.
  const imports = rows.filter(row => row.replace);
  let imported = [];
  if (imports.length) {
    const history = conversation.slice();
    try {
      prepared = { ...context, importOnly: true };
      await review(JSON.stringify({ items: imports.map(({ spec }) => ({
        id: spec.id, key:context.catalog[spec.id-1].key, component:context.catalog[spec.id-1].knowledgeName || context.catalog[spec.id-1].name, text: spec.text, placeholder: spec.placeholder, value: spec.value,
        readOnly: spec.readOnly, optionExample: spec.optionExample
      })) }));
      imported = prepared.items;
    } finally {
      prepared = context;
      conversation = history;
    }
  }
  const replacementNotes=[];
  const nextItems = rows.map(({ previous, patch, spec, replace }) => {
    let item = replace ? { ...imported.shift(), confirmed: false } : { ...previous };
    if (replace && previous) item.uid = previous.uid;
    for (const key of ['text', 'placeholder', 'value', 'readOnly', 'optionExample']) if (spec[key] !== undefined) item[key] = spec[key];
    if (patch.variant !== undefined && !replace) item.variant = normalize(patch.variant);
    else if (patch.readOnly !== undefined) {
      const variant = item.variants.findIndex(component => isReadOnly(component.name) === patch.readOnly);
      if (variant >= 0) item.variant = variant;
    }
    if (!Number.isInteger(item.variant) || !item.variants[item.variant]) throw new Error('Недоступный вариант нового компонента.');
    const fields = new Map(editableProperties(item.variants[item.variant]));
    if(replace&&previous&&patch.value===undefined&&componentKnowledge({name:item.name})?.name==='Text') {
      const oldValue=Object.entries(previous.values||{}).find(([key,value])=>typeof value==='string'&&/^(?:value|amount|sum|значение|сумма)(?:#|$)/i.test(key));
      if(oldValue){item.value=oldValue[1];const valueFields=[...fields].filter(([key,prop])=>prop.type==='TEXT'&&textCopyRole(key)==='value');if(valueFields.length===1)item.values={...item.values,[valueFields[0][0]]:oldValue[1]};}
    }
    // Preserve compatible manual values only within the same component type.
    if (!replace && item.variant !== previous.variant) {
      item.values = Object.fromEntries(Object.entries(item.values || {}).filter(([key, value]) => fields.get(key)?.type === (typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT')));
      item.fillKeys = undefined;
      item.texts = undefined;
    }
    const semantic = { text: isLabel, placeholder: key => /^(?:placeholder|плейсхолдер)(?:#|$)/i.test(key), value: key => /^(?:value|input[ _-]?value|значение)(?:#|$)/i.test(key) };
    for (const [name, matches] of Object.entries(semantic)) if (patch[name] !== undefined && patch[name] !== previous?.[name]) {
      item.values = { ...item.values };
      item.texts = { ...item.texts };
      for (const [key, prop] of fields) if (prop.type === 'TEXT' && matches(key)) { item.values[key] = patch[name]; delete item.texts[key]; }
    }
    if (patch.values !== undefined) {
      if (!patch.values || typeof patch.values !== 'object' || Array.isArray(patch.values)) throw revisionFormatError('Некорректные свойства компонента.');
      let values=patch.values;
      if(replace&&previous){
        const result=mapReplacementValues(values,fields,previous,item.name);values=result.mapped;
        if(result.skipped.length)replacementNotes.push('«'+item.text+'»: свойства прежнего типа не перенесены ('+[...new Set(result.skipped)].join(', ')+'). Проверьте настройки нового компонента.');
      }
      item.values = { ...item.values };
      for (const [key, value] of Object.entries(values)) {
        const type = fields.get(key)?.type;
        if (type === 'TEXT' ? typeof value !== 'string' || value.length > 3000 : type !== 'BOOLEAN' || typeof value !== 'boolean') throw revisionFormatError('Свойство «'+key+'» недоступно у нового компонента.');
        item.values[key] = value;
      }
    }
    syncItemCopy(item);
    item.error = '';
    if (replace || revisionSummary([previous], [item]).length) item.confirmed = false;
    return item;
  });
  const changesApplied = revisionSummary(context.items, nextItems);
  if (!changesApplied.length) throw revisionNotApplied('Модель вернула прежний набор без изменений. Сверь latestRequest с фактическими components и передай применимые изменения в updates или items. Если задача уже выполнена или неоднозначна, верни action:reply, needsClarification:true и объясни это.');
  const descriptions = nextItems.map(describeSummary);
  context.items = nextItems;
  context.stage = 'list';
  context.index = 0;
  context.revisionPending = false;
  cancelActivePreview();
  conversation.push({ role: 'assistant', text: changesApplied.join('\n') });
  send('proposal', { target: pixso.getNodeById(context.bodyId)?.name, items: descriptions,
    changes: changesApplied, notes:replacementNotes, reply: '', revisionPending: false });
}

async function reviewConversation(raw) {
  const response = parseModelResponse(raw);
  if (typeof response.reply !== 'string' || !['reply', 'configure', 'list'].includes(response.action)) {
    throw new Error('Не удалось прочитать ответ. Повторите отправку.');
  }
  const context = prepared;
  if (!context?.items) throw new Error('Сначала запросите компоненты.');
  normalizeRevisionResponse(response, context.items, context.stage);
  if (context.stage === 'list' || response.action === 'list') return reviewListRevision(response);
  if (response.action === 'reply') {
    if (response.needsClarification !== true) throw new Error('Ответ не содержит применимых изменений. Уточните запрос.');
    send('dialogReply', { reply: response.reply, revisionPending: true });
    return;
  }
  const existing = new Map(context.items.map(item => [item.uid, item]));
  const updated = new Map(existing);
  const normalizeUid = value => typeof value === 'string' && /^\d+$/.test(value.trim())
    ? Number(value.trim()) : value;
  if (response.updates !== undefined && !Array.isArray(response.updates)) throw new Error('Некорректный список изменений. Повторите отправку.');
  const changes = (response.updates || []).map(change => {
    if (!change || typeof change !== 'object') throw new Error('Некорректное изменение компонента.');
    return { ...change, uid: normalizeUid(change.uid) };
  });
  for (const change of changes) {
    if (Object.keys(change).some(key => !['uid','variant','values','text','placeholder','value','optionExample','readOnly','error'].includes(key))) throw new Error('Для замены типа нужен action:list, полный items и новый id.');
    const current = existing.get(change.uid);
    if (!current) throw new Error('Ответ ссылается на неизвестный компонент.');
    let variant = change.variant ?? current.variant;
    if (change.readOnly === true) {
      const match = current.variants.findIndex(component => isReadOnly(component.name));
      if (match >= 0) variant = match;
    }
    if (!Number.isInteger(variant) || !current.variants[variant]) throw new Error('Недоступный вариант.');
    const candidate = { ...current, variant, confirmed: false };
    for (const key of ['text', 'placeholder', 'value', 'optionExample']) {
      if (change[key] === undefined) continue;
      if (typeof change[key] !== 'string' || change[key].length > 3000) throw new Error('Некорректный текст компонента.');
      candidate[key] = change[key];
    }
    if (change.readOnly !== undefined) {
      if (typeof change.readOnly !== 'boolean') throw new Error('Некорректный режим read-only.');
      candidate.readOnly = change.readOnly;
    }
    if (variant !== current.variant) await ensureComponentLabel(candidate.variants[variant]);
    const fields = new Map(editableProperties(candidate.variants[variant]));
    candidate.values = variant===current.variant?{...current.values}:mapVariantCopyValues(current.values,editableProperties(current.variants[current.variant]),Array.from(fields));
    applySemanticCopyPatch(candidate,change,fields);
    for (const [key, value] of Object.entries(change.values || {})) {
      if (!fields.has(key) || (fields.get(key).type === 'BOOLEAN' ? typeof value !== 'boolean' : typeof value !== 'string' || value.length > 3000)) {
        throw new Error('Ответ содержит недоступное свойство.');
      }
      candidate.values[key] = value;
    }
    if (change.error !== undefined) {
      if (typeof change.error !== 'string' || change.error.length > 3000) throw new Error('Некорректные ошибки.');
      candidate.error = '';
    }
    syncItemCopy(candidate);
    updated.set(change.uid, candidate);
  }
  let nextItems = context.items.map(item => updated.get(item.uid));
  const actualChanges = revisionSummary(context.items, nextItems);
  if (!actualChanges.length) throw revisionNotApplied('Модель не передала изменений. Передай updates по последней просьбе либо задай уточняющий вопрос через action:reply и needsClarification:true.');
  context.items = nextItems;
  context.revisionPending = false;
  conversation.push({ role: 'assistant', text: actualChanges.join('\n') });
  if (response.action === 'list' || context.stage === 'list') {
    context.stage = 'list';
    send('proposal', { items: nextItems.map(describeSummary), reply: response.reply });
  } else {
    send('dialogReply', { reply: actualChanges.join('\n'), revisionPending: false });
    if (response.action === 'configure') {
      context.index = nextItems.findIndex(item => !item.confirmed);
      if (context.index < 0) context.index = 0;
      await openCurrentComponent();
    }
  }
}

function isReadOnly(name) {
  return /(?:^|[,=]\s*)read[ _-]?only(?:\s*=\s*true)?(?=\s*(?:,|$))/i.test(name);
}

async function backComponent(draft) {
  if (!prepared || prepared.revisionPending || !['copy','ready'].includes(prepared.stage)) throw new Error('Возврат сейчас недоступен.');
  if (prepared.stage === 'copy') {
    await saveComponentDraft(draft);
    if (prepared.index === 0) {
      cancelActivePreview();
      prepared.stage='list';
      send('proposal', {items:prepared.items.map(describeSummary),reply:'Проверьте набор компонентов.'});
      return;
    }
    prepared.index--;
  } else prepared.index=prepared.items.length-1;
  await openCurrentComponent();
}

async function openProperties() {
  if (prepared?.revisionPending) throw new Error('Сначала примените правки или явно оставьте текущий набор.');
  if (prepared?.stage !== 'list' || !prepared.items.length) throw new Error('Сначала согласуйте набор.');
  prepared.index = 0;
  await openCurrentComponent();
}

async function openCurrentComponent() {
  await yieldToEditor();
  await ensureComponentLabel(prepared.items[prepared.index].variants[prepared.items[prepared.index].variant]);
  prepared.stage = 'copy';
  const { index, items } = prepared;
  await publishPreview('componentOpened', items[index], { index, total: items.length, requestPreview:true });
}

function requestCopy(revision = '') {
  const { index, items, stage } = prepared || {};
  const item = items?.[index];
  if (!item || stage !== 'copy') {
    throw new Error('Подтвердите свойства компонента.');
  }
  const description = describeItem(item);
  send('copyRequest', { prompt: [
    'Согласуй тексты одного компонента. Следуй текстовому стандарту.',
    'Учитывай выбранные свойства. Ошибки и состояния пока не предлагай; error оставь пустым.',
    'Верни только JSON: {"reply":"Пояснение или вопрос","text":"Подпись","placeholder":"","value":"","texts":{},"error":""}. Заполни texts согласованными текстами по точным ключам TEXT из component.fields. Для незаполняемых свойств не добавляй ключи.',
    'Если есть revision, внеси только запрошенные изменения.',
    JSON.stringify({ task: prepared.task, requirements: flow?.requirements, standard: prepared.standard,
      component: description, fillKeys: item.fillKeys, revision })
  ].join('\n') });
}

async function reviewCopy(raw) {
  const entry = parseModelResponse(raw);
  if (typeof entry?.text !== 'string' || !entry.text.trim() ||
      ['text', 'placeholder', 'value', 'error'].some(key =>
        entry[key] != null && (typeof entry[key] !== 'string' || entry[key].length > 3000))) {
    throw new Error('GigaCode вернул неполные тексты. Запросите их снова.');
  }
  const { index, items } = prepared;
  const current = items[index];
  const texts = Object.fromEntries(Object.entries(entry.texts || {}).filter(([key, value]) =>
    describeItem(current).fields.some(field => field.key === key && field.type === 'TEXT') && typeof value === 'string' && value.length <= 3000));
  const item = { ...current, texts, text: entry.text, placeholder: entry.placeholder, value: entry.value,
    error: '', confirmed: false };
  const preview = await publishPreview('copyOpened', item, { index, total: items.length, reply: entry.reply }, true);
  item.values = { ...current.values, ...Object.fromEntries(preview.fields
    .filter(field => field.type === 'TEXT' && field.value != null).map(field => [field.key, field.value])) };
  items[index] = item;
  prepared.stage = 'copy';
}

const instanceLabels = new WeakMap();

function editableProperties(component) {
  const properties = Object.entries({
    ...(component.parent?.type === 'COMPONENT_SET' ? component.parent.componentPropertyDefinitions : {}),
    ...component.componentPropertyDefinitions
  }).filter(([, property]) => property.type === 'TEXT' || property.type === 'BOOLEAN');
  if (properties.some(([key, property]) => property.type === 'TEXT' && isLabel(key))) return properties;
  const label = instanceLabels.get(component);
  if (label) properties.push(label);
  return properties;
}

async function ensureComponentLabel(component) {
  if(instanceLabels.has(component)||editableProperties(component).some(([key,prop])=>prop.type==='TEXT'&&isLabel(key)))return;
  // Layer paths are relative to the component root, just as in its instance.
  // Discover them once without materializing a temporary instance on the canvas.
  instanceLabels.set(component,await findInstanceLabel(component));
}

async function findInstanceLabel(instance) {
  const labels=[];
  const stack=Array.from(instance.children||[]).map((node,index)=>({node,path:[index]}));
  let visited=0;
  while(stack.length) {
    const {node,path}=stack.pop();
    if(node.visible===false)continue;
    if(node.type==='TEXT'&&(isLabel(node.name)||isLabel(node.characters))) {
      labels.push(['Label#layer:'+path.join('.'),{type:'TEXT',defaultValue:node.characters}]);
      if(labels.length>1)return undefined;
    }
    Array.from(node.children||[]).forEach((child,index)=>stack.push({node:child,path:[...path,index]}));
    if(++visited%100===0)await yieldToEditor();
  }
  return labels.length===1?labels[0]:undefined;
}

function isLabel(name) {
  return /^(?:label|caption|title|field[ _-]?label|заголовок|подпись)(?:#|$)/i.test(name);

}

function describeItem(item, suggest = false, showAllFields = false) {
  const fields = editableProperties(item.variants[item.variant]);
  const textKeys = fields.filter(([, property]) => property.type === 'TEXT').map(([key]) => key);
  const overrides = new Map(Object.entries(item.texts || {}));
  const copy = [];
  const put = (title, matches, value) => {
    const key = textKeys.find(key => matches(key) && (!item.fillKeys || item.fillKeys.includes(key)));
    if (!key && value != null && value !== '' && !Object.values(item.texts || {}).includes(value)) {
      copy.push({ title, value });
    }
    if (key && value != null && !overrides.has(key)) overrides.set(key, value);
    return Boolean(key);
  };
  const label = put('Подпись', isLabel, item.text);
  const placeholder = put('Плейсхолдер', key => /^(?:placeholder|плейсхолдер|заполнитель)(?:#|$)/i.test(key), item.placeholder);
  const displayText=componentKnowledge({name:item.name})?.name==='Text';
  const value = put('Моковое значение', key => /^(?:value|input[ _-]?value|значение|введённый текст)(?:#|$)/i.test(key) || (displayText&&/^(?:text|content|текст)(?:#|$)/i.test(key)), item.value);
  return {
    uid: item.uid, name: item.name, text: item.text, copy, error: item.error, fillKeys: item.fillKeys,
    readOnly: isReadOnly(item.variants[item.variant].name), requestedReadOnly: item.readOnly, optionExample: item.optionExample,
    missing: [!label && 'подпись', item.placeholder && !placeholder && 'плейсхолдер',
      item.value && !value && 'моковое значение'].filter(Boolean),
    variant: item.variant, variants: variantMetadata(item.variants).names,
    fields: fields.filter(([key, property]) => property.type !== 'TEXT' ||
      showAllFields || !item.fillKeys || item.fillKeys.includes(key)).map(([key, property]) => ({
      key, type: property.type,
      value: suggest && overrides.has(key) ? overrides.get(key) : item.values && Object.prototype.hasOwnProperty.call(item.values, key)
        ? item.values[key] : overrides.get(key) ?? property.defaultValue
    }))
  };
}

async function configureItem({ index, variant, values, error, live }, confirm, render = true) {
  if (confirm && prepared?.revisionPending) throw new Error('Сначала завершите правки набора.');
  if (prepared?.stage !== 'copy') throw new Error('Сначала согласуйте набор.');
  const item = prepared?.items?.[index];
  if (!item || index !== prepared.index || !Number.isInteger(variant) || !item.variants[variant]) throw new Error('Компонент или вариант недоступен.');
  if (variant !== item.variant) {
    const priorFields=editableProperties(item.variants[item.variant]);
    await ensureComponentLabel(item.variants[variant]);
    const nextFields=editableProperties(item.variants[variant]);
    const prior={...item,values:{...item.values,...values}};
    syncItemCopy(prior);
    item.text=prior.text;item.value=prior.value;item.placeholder=prior.placeholder;
    item.values=mapVariantCopyValues(prior.values,priorFields,nextFields);
    item.variant=variant;item.texts=undefined;item.fillKeys=undefined;
    values=undefined;
    if(typeof error==='string')item.error=error.trim().slice(0,3000);
  }
  item.confirmed = false;
  if (confirm || values) {
    const fields = new Map(editableProperties(item.variants[variant]));
    if (!values || Object.entries(values).some(([key, value]) => {
      const type = fields.get(key)?.type;
      return type === 'TEXT' ? typeof value !== 'string' || value.length > 3000
        : type !== 'BOOLEAN' || typeof value !== 'boolean';
    })) throw new Error('Проверьте свойства компонента.');
    item.values = { ...item.values, ...values };
    if (prepared.stage === 'copy' && typeof error === 'string') item.error = error.trim().slice(0, 3000);
    syncItemCopy(item);
    item.confirmed = confirm;
  }
  if (confirm) {
    prepared.index++;
    if (prepared.index === prepared.items.length) {
      prepared.stage = 'ready';
      send('readyToApply', { items: prepared.items.map(describeSummary) });
    } else {
      await openCurrentComponent();
    }
    return;
  }
  if (render) await publishPreview(live ? 'itemPreview' : 'itemConfigured', item, { index, requestPreview:true });
}

function readLightboxes() {
  return JSON.parse(pixso.root.getPluginData(lightboxKey) || '{}');
}

async function findLibraryLightbox(size, diagnostics) {
  if (typeof pixso.getLibraryListAsync !== 'function' || typeof pixso.getLibraryByKeyAsync !== 'function') {
    diagnostics.push('В этой версии API отсутствует метод чтения библиотек.');
    return null;
  }
  const list = await pixso.getLibraryListAsync();
  const listed = (Array.isArray(list) ? list : [list]).filter(item => item?.key);
  const libraries = listed.filter(item => item.subscribed);
  diagnostics.push('библиотек: ' + listed.length + ', подключённых: ' + libraries.length);
  const results = await Promise.allSettled(libraries.map(item => pixso.getLibraryByKeyAsync(item.key)));
  const matches = new Map();
  const isLightbox = name => /(?:^|\/)\s*light[ _-]*box(?=$|[\s/_,(-])/i.test(name || '');
  const hasSize = name => (name || '').toUpperCase().split(/[^A-Z0-9]+/).includes(size);
  const assets = results.flatMap(result =>
    result.status === 'fulfilled' ? result.value?.componentList || [] : []);
  diagnostics.push('элементов каталога: ' + assets.length);
  const lightboxAssets = new Set();
  async function collect(components, libraryAssets) {
    for (const asset of components) {
      const path = [asset.name, asset.containerName, asset.pageName, ...(asset.categories || [])];
      if (!path.some(isLightbox)) continue;
      const variantNames = (asset.variants || []).slice(0, 4).map(variant => variant.name).filter(Boolean);
      lightboxAssets.add(asset.type + ' ' + [asset.containerName, asset.name].filter(Boolean).join(' / ') +
        (variantNames.length ? ' [' + variantNames.join(', ') + ']' : ''));
      if (asset.type === 'COMPONENT_SET') {
        const namedSize = hasSize(asset.name);
        const variants = (asset.variants || []).filter(variant => variant.key && hasSize(variant.name));
        if (variants.length && !namedSize) {
          for (const variant of variants) matches.set(variant.key, { variant, libraryAssets });
        } else if (asset.key && typeof pixso.importComponentSetByKeyAsync === 'function') {
          const set = await pixso.importComponentSetByKeyAsync(asset.key);
          if (namedSize && set.defaultVariant?.type === 'COMPONENT') {
            const variant = set.defaultVariant;
            matches.set(variant.key || variant.id, { variant, libraryAssets });
            continue;
          }
          for (const variant of set.children) {
            if (variant.type === 'COMPONENT' && (hasSize(variant.name) ||
                Object.values(variant.variantProperties || {}).some(value => value.trim().toUpperCase() === size))) {
              matches.set(variant.key || variant.id, { variant, libraryAssets });
            }
          }
        }
      } else if (asset.type === 'COMPONENT' && asset.key && hasSize(asset.name)) {
        matches.set(asset.key, { variant: asset, libraryAssets });
      }
    }
  }
  for (const result of results) {
    const components = result.status === 'fulfilled' && result.value?.componentList;
    if (components) await collect(components, components);
  }
  if (!matches.size && typeof pixso.getLibraryComponentsInUse === 'function') {
    const used = pixso.getLibraryComponentsInUse();
    diagnostics.push('используемых компонентов: ' + used.length);
    await collect(used);
  }
  if (matches.size > 1) throw new Error('В подключённых библиотеках найдено несколько вариантов LightBox ' + size + '.');
  if (!matches.size && results.some(result => result.status === 'rejected')) {
    throw new Error('Pixso не вернул содержимое одной из подключённых библиотек.');
  }
  diagnostics.push('записей LightBox: ' + lightboxAssets.size);
  if (!matches.size && lightboxAssets.size) {
    diagnostics.push('найдено: ' + [...lightboxAssets].slice(0, 8).join('; '));
  }
  return matches.values().next().value || null;
}

function getActiveForm(id) {
  const frame = id && pixso.getNodeById(id);
  if (frame?.type !== 'FRAME' || frame.removed || frame.parent?.id !== pixso.currentPage.id) {
    throw new Error('Поставьте LightBox на текущую страницу.');
  }
  return frame;
}

function isFormBody(frame, body) {
  if (body?.type !== 'FRAME' || body.removed || !['VERTICAL', 'HORIZONTAL'].includes(body.layoutMode)) return false;
  for (let parent = body.parent; parent; parent = parent.parent) {
    if (parent.id === frame.id) return true;
    if (parent.type === 'INSTANCE' || parent.type === 'COMPONENT') return false;
  }
  return false;
}

function findFormBody(frame) {
  const [selected] = pixso.currentPage.selection;
  if (pixso.currentPage.selection.length === 1 && selected.id !== frame.id) {
    if (isFormBody(frame, selected)) return selected;
    for (let parent = selected.parent; parent && parent.id !== frame.id; parent = parent.parent) {
      if (parent.type === 'INSTANCE') {
        throw new Error('Выбран «' + selected.name + '» внутри экземпляра «' + parent.name +
          '». Для вставки выберите редактируемый фрейм вне этого экземпляра.');
      }
    }
    throw new Error('Выбран «' + selected.name + '» (' + selected.type +
      ', layout: ' + (selected.layoutMode || 'нет') + '). Нужен редактируемый фрейм с автолейаутом внутри поставленного LightBox.');
  }
  const children = Array.from(frame.children || []).filter(node => node.type === 'FRAME');
  const bodies = [...children, ...children.flatMap(node => Array.from(node.children || []))]
    .filter(node => /^body[ _-]*page$/i.test(node.name) && isFormBody(frame, node));
  if (bodies.length === 1) return bodies[0];
  throw new Error('Выделите фрейм с автолейаутом для полей внутри поставленного LightBox.');
}

async function placeLightbox(size) {
  if (!lightboxSizes.includes(size)) throw new Error('Выберите размер LightBox.');
  const page = pixso.currentPage;
  const diagnostics = [];
  const match = await findLibraryLightbox(size, diagnostics) || { variant: readLightboxes()[size] };
  if (!match.variant) throw new Error('LightBox ' + size + ' не найден. Ответ Pixso — ' + diagnostics.join(' · ') + '.');
  const variant = match.variant;
  const component = typeof variant.createInstance === 'function' ? variant : await resolveComponent(variant);
  if (pixso.currentPage.id !== page.id) throw new Error('Страница изменилась. Выберите размер заново.');

  const previous = activeFormId && pixso.getNodeById(activeFormId);
  const instance = component.createInstance();
  let frame;
  try {
    frame = instance.detachInstance();
    frame.name = 'LightBox / ' + size;
    frame.x = previous?.parent?.id === page.id ? previous.x + previous.width + 48 : pixso.viewport.center.x - frame.width / 2;
    frame.y = previous?.parent?.id === page.id ? previous.y : pixso.viewport.center.y - frame.height / 2;
    page.selection = [frame];
    pixso.viewport.scrollAndZoomIntoView([frame]);
  } catch (error) {
    const created = frame || instance;
    if (!created.removed) created.remove();
    throw error;
  }
  activeFormId = frame.id;
  approvedSource = null;
  flow = null; pendingFlow = null; flowApproved = false;
  activeLibraryAssets = match.libraryAssets;
  activeLightboxComponent = component;
  prepared = null;
  send('formPlaced', { size });
}

async function resolveComponent(binding) {
  let component = binding.id ? pixso.getNodeById(binding.id) : null;
  if (component?.type !== 'COMPONENT' && binding.key) {
    component = await pixso.importComponentByKeyAsync(binding.key);
  }
  if (component?.type !== 'COMPONENT') throw new Error('Компонент недоступен: ' + binding.name);
  return component;
}

const loadedFonts = new Set();

async function setInstanceValues(instance, values, name, progress = () => {}) {
  const overrides = Object.create(null);
  const layers = [];
  const fields = instance.componentProperties || {};
  for (const [key, value] of Object.entries(values)) {
    if (key.startsWith('Label#layer:')) {
      layers.push([key, value]);
      continue;
    }
    const type = typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT';
    if (fields[key]?.type !== type) throw new Error('Недоступно свойство «' + key + '» в «' + name + '».');
    if (fields[key].value !== value) overrides[key] = value;
  }
  progress('Применяю свойства');
  if (Object.keys(overrides).length) {
    if (typeof instance.setProperties !== 'function') throw new Error('Pixso не поддерживает изменение свойств экземпляра через setProperties.');
    instance.setProperties({ ...overrides });
  }
  for (const [key, value] of layers) {
    const layer = key.slice('Label#layer:'.length).split('.')
      .reduce((node, index) => node?.children?.[Number(index)], instance);
    if (layer?.type !== 'TEXT' || (!isLabel(layer.name) && !isLabel(layer.characters))) {
      throw new Error('Вложенная подпись недоступна в «' + name + '».');
    }
    if (layer.characters === value) continue;
    await setTextLayerValue(layer,value,progress,()=>instance.removed);

  }
}

async function setTextLayerValue(layer,value,progress=()=>{},cancelled=()=>false) {
  if(layer.characters===value)return;
  let fonts=typeof layer.getRangeAllFontNames==='function'&&layer.characters.length ? layer.getRangeAllFontNames(0,layer.characters.length) : [layer.fontName];
  if(!fonts.every(font=>font&&typeof font.family==='string'))fonts=(layer.textStyles||[]).map(range=>range.textStyle?.fontName).filter(Boolean);
  if(!fonts.length)throw new Error('Не удалось определить шрифт текстового слоя.');
  for(const font of fonts) {
    const key=JSON.stringify(font);
    if(!loadedFonts.has(key)) {progress('Загружаю шрифт '+font.family+' '+font.style);await pixso.loadFontAsync(font);loadedFonts.add(key);}
    if(cancelled())throw new Error('Подготовка превью отменена.');
  }
  layer.characters=value;
  if(layer.characters!==value)throw new Error('Pixso не применил текст слоя «'+layer.name+'».');
}

// Cache only successful exports; no Pixso nodes survive an export.
// Identity includes the actual component object and all rendered field values.
const componentPreviewCache = [];
const previewCacheLimit = 6;
const previewCacheByteLimit = 512 * 1024;
function previewSignature(description) {
  return JSON.stringify(description.fields.map(({key,value}) => [key,value]).sort(([a],[b]) => a.localeCompare(b)));
}
function cachedComponentPreview(component, signature) {
  const index = componentPreviewCache.findIndex(entry => entry.component === component && entry.signature === signature);
  if (index < 0) return;
  const [entry] = componentPreviewCache.splice(index, 1);
  componentPreviewCache.push(entry);
  return entry.png;
}
function cacheComponentPreview(component, signature, png) {
  if (!png.length || png.length > previewCacheByteLimit) return;
  const prior = componentPreviewCache.findIndex(entry => entry.component === component && entry.signature === signature);
  if (prior >= 0) componentPreviewCache.splice(prior, 1);
  componentPreviewCache.push({component,signature,png});
  while (componentPreviewCache.length > previewCacheLimit || componentPreviewCache.reduce((size,entry) => size + entry.png.length, 0) > previewCacheByteLimit) componentPreviewCache.shift();
}

let previewSequence = 0;
let activePreview;

async function publishPreview(type, item, message, suggest = false) {
  await ensureComponentLabel(item.variants[item.variant]);
  cancelActivePreview();
  const component=item.variants[item.variant];
  let description=describeItem(item,suggest);
  const previewId=++previewSequence;
  const signature=previewSignature(description);
  const cached=cachedComponentPreview(component,signature);
  if(cached) {
    send(type,{...message,item:{...description,png:cached,previewId,cached:true}});
    return description;
  }
  let instance, cancelled=false, started=false;
  activePreview={previewId,start(){
    if(started||cancelled)return;
    started=true;
    return renderPreview();
  },cancel(){
    cancelled=true;
    if(instance&&!instance.removed)instance.remove();
  }};
  send(type,{...message,item:{...description,previewId,previewDeferred:!message.requestPreview}});
  return description;

  async function renderPreview() {
    let result;
    try {
      send('previewProgress',{previewId,stage:'Создаю экземпляр в Pixso'});
      await yieldToEditor();
      if(cancelled)return;
      instance=component.createInstance();
      const frame=prepared?.frameId?pixso.getNodeById(prepared.frameId):null;
      instance.x=frame?frame.x+frame.width+48:pixso.viewport.center.x;
      instance.y=frame?frame.y:pixso.viewport.center.y;
      if(!instanceLabels.has(component)&&!editableProperties(component).some(([key,prop])=>prop.type==='TEXT'&&isLabel(key))) {
        instanceLabels.set(component,await findInstanceLabel(instance));
        if(cancelled)return;
        description=describeItem(item,suggest);
        send('itemConfigured',{index:message.index,item:{...description,previewId}});
      }
      const values=Object.fromEntries(description.fields.filter(field=>field.value!=null).map(field=>[field.key,field.value]));
      await setInstanceValues(instance,values,item.name,stage=>{if(!cancelled)send('previewProgress',{previewId,stage});});
      if(cancelled)return;
      if(typeof instance.exportAsync!=='function')throw new Error('Pixso не поддерживает экспорт превью.');
      send('previewProgress',{previewId,stage:'Экспортирую превью до 640 px'});
      await yieldToEditor();
      if(cancelled)return;
      const png=await instance.exportAsync(previewExportSettings(instance,640));
      result={png:Array.from(png)};
      if(!cancelled)cacheComponentPreview(component,previewSignature(description),result.png);
    } catch(error) { result={previewError:error.message||String(error)}; }
    finally {
      if(instance&&!instance.removed)instance.remove();
      if(activePreview?.previewId===previewId)activePreview=undefined;
    }
    if(!cancelled)send('previewRendered',{item:{name:description.name,...result,previewId}});
  }
}

async function insert(parent, item) {
  const instance = item.variants[item.variant].createInstance();
  try {
    parent.appendChild(instance);
    await setInstanceValues(instance, item.values, item.name);
    instance.setPluginData('triplex-field-id', String(item.uid));
    instance.setPluginData('triplex-field-label', item.text);
    instance.setPluginData('triplex-component-name', item.name);
    return instance;
  } catch (error) {
    if (!instance.removed) instance.remove();
    throw error;
  }
}

async function apply() {
  const context = prepared;
  if (context?.revisionPending) throw new Error('Сначала завершите правки набора.');
  if (!context?.items?.length) throw new Error('Сначала получите список компонентов.');
  if (context.stage !== 'ready' || context.items.some(item => !item.confirmed)) {
    throw new Error('Подтвердите каждый компонент перед вставкой.');
  }
  const frame = getActiveForm(context.frameId);
  const body = pixso.getNodeById(context.bodyId);
  if (!isFormBody(frame, body) || activeFormId !== frame.id) {
    throw new Error('Фрейм изменился. Запросите компоненты заново.');
  }
  const width = frame.width;
  const axis = frame.layoutMode === 'VERTICAL' ? 'counterAxisSizingMode' : 'primaryAxisSizingMode';
  const previousSizing = frame[axis];
  const inserted = [];
  try {
    for (const item of context.items) inserted.push(await insert(body, item));
    if (Math.abs(frame.width - width) > 0.1) {
      if (previousSizing === 'AUTO') frame[axis] = 'FIXED';
      frame.resizeWithoutConstraints(width, frame.height);
    }
  } catch (error) {
    for (const instance of inserted) instance.remove();
    if (frame[axis] !== previousSizing) frame[axis] = previousSizing;
    throw error;
  }
  prepared = null;
  pixso.currentPage.selection = [body];
  approvedSource = { frameId:frame.id,bodyId:body.id,task:context.task,standard:context.standard,
    decisions:modelConversation(context.task),components:context.items.map(({uid,id,name,text,value,placeholder,readOnly,optionExample,values})=>({uid,id,name,text,value,placeholder,readOnly,optionExample,values})) };
  flow = null;
  pendingFlow = null;
  flowApproved = false;
  send('applied', { count: inserted.length, target: body.name, items:context.items.map(item=>({uid:item.uid,name:item.name,text:item.text})) });
}

let messageQueue = Promise.resolve();
// Recover after an unexpected rejection so later editor commands still run.
pixso.ui.onmessage = message => {
  messageQueue = messageQueue
    .then(() => handleMessage(message))
    .catch(error => reportCommandError(message, error, false));
};

function removePlannedItem(uid) {
  if (!prepared?.items || !['list','copy','ready'].includes(prepared.stage)) throw new Error('Удаление доступно до вставки компонентов на фрейм.');
  if (prepared.revisionPending) throw new Error('Сначала завершите правки в чате или оставьте текущий набор.');
  const index = prepared.items.findIndex(item => item.uid === uid);
  if (index < 0) throw new Error('Компонент уже удалён или больше не входит в набор.');
  const item = prepared.items[index];
  cancelActivePreview();
  prepared.items = prepared.items.filter(candidate => candidate.uid !== uid);
  prepared.stage = 'list'; prepared.index = 0;
  const change = 'Удалён: ' + item.text + ' · ' + item.name;
  conversation.push({ role:'user', text:'Убрать компонент «' + item.text + '» из набора (uid=' + uid + ').' });
  conversation.push({ role:'assistant', text:change });
  send('proposal', { target:pixso.getNodeById(prepared.bodyId)?.name, items:prepared.items.map(describeSummary), changes:[change], revisionPending:false });
}

function cancelActivePreview(previewId = activePreview?.previewId) {
  if (!activePreview || activePreview.previewId !== previewId) return;
  activePreview.cancel();
  activePreview = undefined;
}

function invalidateFlow() {
  pendingFlow = null;
  flowApproved = false;
}

function lockLayout() {
  if (!approvedSource) throw new Error('Сначала добавьте компоненты на фрейм.');
  const source = getActiveForm(approvedSource.frameId);
  approvedSource.signature = layoutSignature(source);
  source.locked = true;
  flow = null;
  invalidateFlow();
  send('layoutLocked');
}

function unlockLayout() {
  if (approvedSource) {
    getActiveForm(approvedSource.frameId).locked = false;
    delete approvedSource.signature;
  }
  flow = null;
  invalidateFlow();
  send('layoutUnlocked');
}

function approveFlow(message) {
  if (pendingFlow || !flow?.states.length) throw new Error('Сначала получите список состояний для утверждения.');
  lockedSource();
  flow.selected = selectFlow(message.selection, editedFlowStates(message.edits));
  if (!flow.selected.length) throw new Error('Выберите хотя бы одно состояние или ошибку.');
  flowApproved = true;
  send('flowApproved');
}

function discardRevision() {
  if (prepared) {
    prepared.revisionPending = false;
    conversation.push({ role: 'user', text: 'Последние правки отменены. Оставить текущий фактический набор без изменений.' });
  }
  send('revisionDiscarded');
}

async function saveComponentDraft(draft) {
  if (draft && prepared?.stage === 'copy') await configureItem(draft, false, false);
}

function revisePlan(message) {
  const revision = typeof message.revision === 'string' ? message.revision.trim() : '';
  if (prepared?.stage !== 'list' || !prepared.items || !revision || revision.length > 3000) {
    throw new Error('Опишите правки к предложению (до 3000 символов).');
  }
  sendPlanRequest(revision);
}

const commandHandlers = new Map(Object.entries({
  init: () => send('ready', { lightboxSizes }),
  lockLayout,
  unlockLayout,
  requestFlow,
  requestStates,
  reviewFlow,
  invalidateFlow,
  approveFlow,
  previewFlowState,
  createStates: () => createStates(),
  prepare: message => { prepared = null; return prepare(message); },
  placeLightbox: message => placeLightbox(message.size),
  removeItem: message => removePlannedItem(message.uid),
  discardRevision,
  dialog: async message => {
    await saveComponentDraft(message.draft);
    await requestConversation(message);
  },
  reviewDialog: message => reviewConversation(message.raw),
  revise: revisePlan,
  review: message => review(message.raw),
  backComponent: message => backComponent(message.draft),
  openProperties: () => openProperties(),
  requestCopy: async message => {
    await saveComponentDraft(message.draft);
    requestCopy(message.revision);
  },
  reviewCopy: message => reviewCopy(message.raw),
  renderPreview: message => {
    // Rendering runs outside the command queue so cancel/edit can interrupt an export.
    if (activePreview?.previewId === message.previewId) {
      activePreview.start()?.catch(error => reportCommandError(message, error, false));
    }
  },
  cancelPreview: message => {
    if (activePreview?.previewId === message.previewId) cancelActivePreview(message.previewId);
  },
  chooseVariant: message => configureItem(message, false),
  previewItem: message => configureItem(message, false),
  confirmItem: message => configureItem(message, true),
  unconfirmItem: message => {
    if (prepared?.items?.[message.index]) prepared.items[message.index].confirmed = false;
  },
  apply: () => apply()
}));

const commandErrorStages = new Map([
  ['prepare', 'Подготовка запроса'],
  ['review', 'Проверка предложения'],
  ['apply', 'Вставка полей']
]);

function reportCommandError(message, error, allowRepair = true) {
  if (allowRepair) {
    try {
      if (requestFlowRepair(message,error) || requestLabelRepair(message, error)) return;
    } catch (repairError) { error = repairError; }
  }
  const stage = commandErrorStages.get(message?.type);
  const detail = error?.code === 'MODEL_NO_CHANGE'
    ? 'GigaCode не передал применимые изменения после автоматического исправления ответа. Текущий набор сохранён. Уточните, какой компонент и на что заменить, либо подтвердите текущий набор.'
    : error?.message || String(error);
  send('error', {
    message: stage ? stage + ' — ' + detail : detail,
    revisionPending: Boolean(prepared?.revisionPending)
  });
}

async function handleCommand(message) {
  const handler = commandHandlers.get(message?.type);
  if (!handler) return;
  try {
    await handler(message);
  } catch (error) {
    reportCommandError(message, error);
  }
}

const historyKey = 'triplex-dialog-history-v2';
let sessionId;
let sessionUI = {};
let sessionReadOnly = false;
let sessionCreatedAt;
let lastPersistedSessionId;
let lastPersistedSnapshot;
function readHistory() {
  const value = JSON.parse(pixso.root.getPluginData(historyKey) || '{"version":1,"sessions":[]}');
  if (value.version !== 1 || !Array.isArray(value.sessions)) throw new Error('Не удалось прочитать историю диалогов этого файла.');
  return value;
}
function nodeBinding(node) { return node ? { id: node.id, key: node.key, name: node.name } : null; }
function savedItem(item) {
  const result = {};
  for (const key of ['id','uid','name','text','placeholder','value','readOnly','optionExample','error','variant','values','texts','fillKeys','confirmed']) if (item[key] !== undefined) result[key] = item[key];
  result.variants = variantMetadata(item.variants).bindings;
  return result;
}
function sessionState() {
  let plan = null;
  if (prepared) {
    plan = {};
    for (const key of ['frameId','bodyId','catalog','task','standard','stage','index','revisionPending','requireCatalogIdentity']) if (prepared[key] !== undefined) plan[key] = prepared[key];
    if (prepared.items) {
      const groups=new Map();plan.variantGroups=[];
      plan.items=prepared.items.map(item=>{
        let group=groups.get(item.variants);
        if(group===undefined){group=plan.variantGroups.length;groups.set(item.variants,group);plan.variantGroups.push(variantMetadata(item.variants).bindings);}
        const result=savedItem(item);delete result.variants;result.variantGroup=group;return result;
      });
    }
  }
  return { prepared: plan, conversation, itemSequence, flow, approvedSource, flowApproved,
    activeFormId, activeLibraryAssets:plan?.catalog ? undefined : libraryCatalog(activeLibraryAssets), activeLightboxComponent: nodeBinding(activeLightboxComponent) };
}
function cleanSessionUI(value) {
  const result = {};
  for (const key of ['task','standard','feedback','revision','size','stateMode','analytics']) if (typeof value?.[key] === 'string') result[key] = value[key];
  for (const key of ['hasFlowDraft','hasFlowResponse','statesExpanded']) result[key] = value?.[key] === true;
  result.flowDecisions = Array.isArray(value?.flowDecisions) ? value.flowDecisions.filter(pair => Array.isArray(pair) && typeof pair[0] === 'string' && typeof pair[1] === 'boolean') : [];
  if (value?.draft && Number.isInteger(value.draft.index) && Number.isInteger(value.draft.variant)) {
    const values=Object.fromEntries(Object.entries(value.draft.values||{}).filter(([,v])=>typeof v==='string'||typeof v==='boolean'));
    result.draft={index:value.draft.index,variant:value.draft.variant,values};
  }
  if(Array.isArray(value?.flowEdits)) result.flowEdits=JSON.parse(JSON.stringify(value.flowEdits));
  result.transcript = Array.isArray(value?.transcript) ? value.transcript.filter(m => ['componentChat','flowChat'].includes(m?.chat) && typeof m.author === 'string' && typeof m.text === 'string').map(({chat,author,text})=>({chat,author,text})) : [];
  return result;
}
function persistSession() {
  if (!pixso.root?.setPluginData || sessionReadOnly) return;
  if (!sessionId && !activeFormId && !sessionUI.task && !sessionUI.transcript?.length) return;
  if (!sessionId) { sessionId = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2); sessionCreatedAt = Date.now(); }
  const history = readHistory();
  const prior = history.sessions.find(s => s.id === sessionId);
  const state = sessionState();
  const generation = Date.now().toString(36) + Math.random().toString(36).slice(2);
  const serialized = JSON.stringify({ version:1, ui:sessionUI, state });
  if (lastPersistedSessionId===sessionId && lastPersistedSnapshot===serialized) return;
  const chunks = Math.ceil(serialized.length / 12000);
  for (let i=0;i<chunks;i++) pixso.root.setPluginData(`${historyKey}:${sessionId}:${generation}:${i}`, serialized.slice(i*12000,(i+1)*12000));
  const entry = { id:sessionId, generation, chunks, createdAt:prior?.createdAt || sessionCreatedAt,
    updatedAt:Date.now(), title:(sessionUI.task || prepared?.task || 'Новый диалог').slice(0,100),
    frameId:activeFormId, stage:prepared?.stage || (approvedSource ? 'done' : 'setup') };
  history.sessions = [entry, ...history.sessions.filter(s=>s.id!==sessionId)];
  // Commit the index last; interrupted writes leave the previous complete snapshot readable.
  pixso.root.setPluginData(historyKey, JSON.stringify(history));
  lastPersistedSessionId=sessionId;
  lastPersistedSnapshot=serialized;
  if (prior) for(let i=0;i<prior.chunks;i++) { try { pixso.root.setPluginData(`${historyKey}:${sessionId}:${prior.generation}:${i}`, ''); } catch {} }
  send('historySaved', { sessionId });
}
function newSession() {
  cancelActivePreview();
  lastPersistedSessionId=lastPersistedSnapshot=undefined;
  sessionId = undefined; sessionUI = {}; sessionReadOnly = false; sessionCreatedAt = undefined;
  prepared = null; conversation = []; flow = null; pendingFlow = null; approvedSource = null;
  flowApproved = false; activeFormId = undefined; activeLibraryAssets = undefined; activeLightboxComponent = undefined;
}
async function restoreSession(id) {
  const entry = readHistory().sessions.find(s=>s.id===id);
  if (!entry) throw new Error('Диалог не найден в этом файле.');
  let serialized = '';
  for(let i=0;i<entry.chunks;i++) {
    const chunk = pixso.root.getPluginData(`${historyKey}:${id}:${entry.generation}:${i}`);
    if (!chunk) throw new Error('Сохранённый диалог повреждён. Текущий диалог оставлен открытым.');
    serialized += chunk;
  }
  const snapshot = JSON.parse(serialized);
  if (snapshot.version!==1 || !snapshot.state) throw new Error('Неподдерживаемый формат диалога.');
  const state = snapshot.state;
  let plan = state.prepared;
  let warning = '';
  try {
    if (state.activeFormId) {
      const frame = pixso.getNodeById(state.activeFormId);
      if (!frame || frame.removed) throw new Error('Исходный фрейм удалён.');
      if (frame.parent?.type === 'PAGE' && frame.parent.id !== pixso.currentPage.id) pixso.currentPage = frame.parent;
      getActiveForm(state.activeFormId);
      const bodyId = plan?.bodyId || state.approvedSource?.bodyId;
      if (bodyId && !isFormBody(frame,pixso.getNodeById(bodyId))) throw new Error('Область компонентов изменилась или удалена.');
    }
    if (plan?.items) {
      const items=[];const restoredGroups=new Map();const restoredBindings=new Map();
      for (const item of plan.items) {
        const group=item.variantGroup;
        let variants=group!==undefined?restoredGroups.get(group):undefined;
        if(!variants) {
          variants=[];
          const bindings=group!==undefined?plan.variantGroups?.[group]:item.variants;
          if(!Array.isArray(bindings))throw new Error('В истории отсутствуют варианты компонента.');
          for(const binding of bindings) {
            const key=binding.id||binding.key;
            let component=restoredBindings.get(key);
            if(!component){component=await resolveComponent(binding);restoredBindings.set(key,component);}
            variants.push(component);
          }
          if(group!==undefined)restoredGroups.set(group,variants);
        }
        items.push({...item,variants});
        await yieldToEditor();
      }
      plan={...plan,items};
    }
  } catch(error) { warning = error.message + ' История доступна для чтения; восстановите фрейм/библиотеку и откройте диалог заново.'; }
  cancelActivePreview();
  lastPersistedSessionId=lastPersistedSnapshot=undefined;
  sessionId=id; sessionCreatedAt=entry.createdAt; sessionUI=cleanSessionUI(snapshot.ui); sessionReadOnly=Boolean(warning);
  prepared = warning ? null : plan; conversation=state.conversation || []; itemSequence=state.itemSequence || 0;
  flow=state.flow; pendingFlow=null; approvedSource=state.approvedSource; flowApproved=state.flowApproved===true;
  activeFormId=state.activeFormId; activeLibraryAssets=state.activeLibraryAssets || plan?.catalog;
  activeLightboxComponent=state.activeLightboxComponent?.id ? pixso.getNodeById(state.activeLightboxComponent.id) : undefined;
  if (!warning && prepared?.stage==='copy' && sessionUI.draft?.index===prepared.index) {
    try { await configureItem(sessionUI.draft,false,false); } catch { warning='Черновик свойств не удалось восстановить. Проверьте настройки компонента.'; }
  }
  if (!warning && approvedSource?.signature && layoutSignature(getActiveForm(activeFormId))!==approvedSource.signature) {
    delete approvedSource.signature; flowApproved=false;
    getActiveForm(activeFormId).locked=false;
    flow=null;sessionUI.hasFlowResponse=false;sessionUI.hasFlowDraft=false;sessionUI.flowEdits=[];sessionUI.stateMode='';
    warning='Макет изменился после сохранения. Выберите сценарий и запросите состояния заново.';
  }
  send('sessionRestored', { sessionId, ui:sessionUI, readOnly:sessionReadOnly, warning,
    stage: plan?.stage || (approvedSource?'done':'list'), hasSource:Boolean(approvedSource), formPlaced:Boolean(activeFormId),
    layoutLocked:Boolean(approvedSource?.signature), flowApproved, flow, revisionPending:plan?.revisionPending===true,
    items: !sessionReadOnly ? prepared?.items?.map((item,index)=>prepared.stage==='copy'&&index===prepared.index?describeItem(item):describeSummary(item)) || (approvedSource?.components || []).map(({uid,name,text})=>({uid,name,text})) : (plan?.items || approvedSource?.components || []).map(({name,text})=>({name,text})),
    labels:activeFormId && pixso.getNodeById(activeFormId) ? Object.fromEntries(confirmedFlowFields(pixso.getNodeById(activeFormId)).map(field=>[field.field,field.label])) : {},
    flowFields:approvedSource&&activeFormId&&pixso.getNodeById(activeFormId)?confirmedFlowFields(pixso.getNodeById(activeFormId)):[],
    index:plan?.index || 0 });
}

function sendHistoryList() {
  send('historyList', { sessions: readHistory().sessions });
}

function reportHistoryError(error, prefix = '') {
  send('historyError', { message: prefix + (error?.message || String(error)) });
}

const historyHandlers = new Map(Object.entries({
  saveSessionUI: message => {
    if (sessionReadOnly) return;
    sessionUI = cleanSessionUI(message.ui);
    persistSession();
  },
  listHistory: sendHistoryList,
  openSession: async message => {
    persistSession();
    await restoreSession(message.id);
  },
  newSession: () => {
    persistSession();
    newSession();
    send('sessionRestored', { ui: {}, items: [], stage: 'list' });
    sendHistoryList();
  }
}));

// Preview traffic must not rewrite history for every exported image.
const transientCommands = new Set(['renderPreview', 'cancelPreview', 'previewItem', 'previewFlowState']);
const measuredCommands = new Set(['dialog', 'prepare', 'review', 'reviewDialog', 'openProperties', 'previewItem', 'chooseVariant', 'previewFlowState', 'requestStates']);
const modelRequestCommands = new Set(['dialog', 'prepare', 'requestStates']);

async function handleMessage(message) {
  if (!message || typeof message !== 'object' || typeof message.type !== 'string') return;
  if (message.type === 'init') {
    await handleCommand(message);
    try { sendHistoryList(); } catch (error) { reportHistoryError(error); }
    return;
  }
  const historyHandler = historyHandlers.get(message.type);
  if (historyHandler) {
    try { await historyHandler(message); } catch (error) { reportHistoryError(error); }
    return;
  }
  if (!commandHandlers.has(message.type)) return;
  if (modelRequestCommands.has(message.type)) {
    send('requestProgress', { message: 'Pixso получил правки. Готовлю контекст для GigaCode…' });
    if (message.ui && !sessionReadOnly) sessionUI = cleanSessionUI(message.ui);
  }
  if (sessionReadOnly) {
    send('error', { message: 'Этот диалог открыт только для чтения. Восстановите исходный фрейм или начните новый диалог.' });
    return;
  }
  if (message.type === 'placeLightbox' && activeFormId && sessionId) {
    try { persistSession(); newSession(); } catch (error) { reportHistoryError(error); return; }
  }
  const startedAt = Date.now();
  await handleCommand(message);
  const preparedAt = Date.now();
  if (!transientCommands.has(message.type)) {
    try { persistSession(); } catch (error) { reportHistoryError(error, 'Не удалось сохранить диалог: '); }
  }
  if (measuredCommands.has(message.type)) {
    send('editorMetrics', {
      operation: message.type,
      prepareMs: preparedAt - startedAt,
      saveMs: Date.now() - preparedAt
    });
  }
}
