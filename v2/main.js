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
function previewExportSettings(node) {
  const extent=Math.max(Number(node.width)||1,Number(node.height)||1);
  return {format:'PNG',constraint:{type:'SCALE',value:Math.min(1,960/extent)}};
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
  const base = prompt + '\n' + rules;
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

function confirmedFlowFields(source) {
  return sourceFields(source).map(node=>{
    const id=node.getPluginData('triplex-field-id');
    const approved=approvedSource?.components?.find(item=>String(item.uid)===id);
    const name=node.getPluginData('triplex-component-name') || approved?.name || node.mainComponent?.parent?.name || node.name;
    const label=Object.entries(node.componentProperties||{}).find(([key,prop])=>isLabel(key)&&prop.type==='TEXT')?.[1].value || node.getPluginData('triplex-field-label');
    const doc=componentKnowledge({name});
    return { field:id,label,component:name,purpose:doc?.use || 'Назначение не сопоставлено',
      confirmed:approved ? {text:approved.text,value:approved.value,placeholder:approved.placeholder,readOnly:approved.readOnly,optionExample:approved.optionExample} : undefined,
      width:node.width,height:node.height,properties:node.componentProperties,
      currentVariant:node.mainComponent?.name,
      variants:Array.from(node.mainComponent?.parent?.type==='COMPONENT_SET'?node.mainComponent.parent.children:[]).filter(n=>n.type==='COMPONENT').map(n=>n.name) };
  });
}
function flowStateKey(state) { return JSON.stringify([state.name,state.condition,state.errors]); }
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
  let copy;
  try {
    const source=lockedSource();
    if (!flow?.states || !Number.isInteger(index)||!flow.states[index]) throw new Error('Состояние недоступно.');
    const states=editedFlowStates(edits);
    const isolated=selection.map((choice,i)=>({...choice,included:i===index&&choice.included}));
    const state=selectFlow(isolated,states)[0];
    if (!state) throw new Error('Состояние исключено. Включите его для превью.');
    copy=source.clone();copy.locked=false;copy.x=source.x+source.width+48;copy.y=source.y;
    const result=applyStateToCopy(copy,state,source);
    if(typeof copy.exportAsync!=='function')throw new Error('Pixso не поддерживает экспорт превью.');
    await yieldToEditor();
    const png=await copy.exportAsync(previewExportSettings(copy));
    lockedSource();
    send('flowPreview',{index,previewId,png:Array.from(png),annotations:result.annotations,errorsPending:result.errorsPending,skipped:result.skipped});
  } catch(error) {send('flowPreview',{index,previewId,error:error.message});}
  finally {if(copy&&!copy.removed)copy.remove();}
}

function requestFlow({ requirements, feedback, standard, selection, edits }) {
  const source = lockedSource();
  if (typeof requirements !== 'string' || !requirements.trim()) throw new Error('Вставьте бизнес-требования.');
  if (requirements.length > 12000 || typeof standard !== 'string' || standard.length > 8000 ||
      typeof feedback !== 'string' || feedback.length > 2000) throw new Error('Сократите входной текст.');
  const context = { requirements: requirements.trim(), standard: standard.trim() };
  pendingFlow = context;
  flowApproved = false;
  send('flowRequest', { prompt: [
    'Предложи состояния и ошибки для уже сверстанной формы. Не меняй состав компонентов.',
    'Проверь применимость: пустое обязательное поле, формат, диапазон, зависимости полей, недоступные данные, сеть, сервер, загрузка, успех, disabled и read-only. Не ограничивайся одной ошибкой. Неподтвержденные бизнес-правила помечай в condition как гипотезы для согласования; не выдумывай числовые ограничения.',
    'Следуй текстовому стандарту. Значения вымышленные. Каждую независимую ошибку предложи отдельным состоянием, сочетания — только если нужны по кейсу.',
    'Верни только JSON: {"reply":"Объяснение","states":[{"name":"Название","condition":"Когда показать","values":{"field-id":"значение"},"variants":[{"field":"field-id","variant":"точное имя доступного варианта"}],"errors":[{"field":"field-id или пустая строка для формы","text":"Текст ошибки"}]}]}.',
    'Дай до 24 релевантных состояний. values, variants и errors могут быть пустыми. Используй только field из fields и варианты из variants. Для ошибки выбери совместимый вариант ошибки, если он доступен. Сохраняй предыдущие предложения и решения пользователя; по уточнению добавляй недостающие.',
    'fields — фактически подтверждённые компоненты с холста, их назначение, текущие свойства и доступные варианты. confirmedTask и decisions — исходная задача и решения пользователя. Следуй им; не возвращай удалённые или заменённые компоненты.',
    'Не предлагай ввод для компонента отображения Amount/Text. Учитывай поведение компонента: не предлагай невозможные действия (например ввод букв, если поле их отфильтровывает). Не меняй размер или тему ради ошибки. Используй только точные варианты из fields.',
    'В reply максимум два коротких предложения о предложениях. Не пересказывай устройство формы и каталог. Для каждого состояния дай понятные name и condition, конкретные values и точные тексты errors. Не делай выводов об отсутствии компонентов во всей дизайн-системе по ограниченной справке.',
    JSON.stringify({ ...context, confirmedTask:approvedSource?.task || requirements, decisions:approvedSource?.decisions || modelConversation(), fields:confirmedFlowFields(source),
      previous:flow ? editedFlowStates(edits) : undefined,selection,feedback })
  ].join('\n') });
}

function reviewFlow({ raw }) {
  const source = lockedSource();
  if (!pendingFlow || typeof raw !== 'string' || raw.length > 40000) throw new Error('Некорректный ответ GigaCode.');
  const plan = parseModelResponse(raw);
  const ids = new Set(sourceFields(source).map(n => n.getPluginData('triplex-field-id')));
  if (typeof plan?.reply !== 'string' || !Array.isArray(plan.states) || plan.states.length > 24 ||
      plan.states.some(state => typeof state?.name !== 'string' || !state.name.trim() ||
        typeof state.condition !== 'string' || !state.values || typeof state.values !== 'object' ||
        Array.isArray(state.values) || Object.entries(state.values).some(([key, value]) => !ids.has(key) || typeof value !== 'string') ||
        (state.variants !== undefined && (!Array.isArray(state.variants) || state.variants.some(v => !ids.has(v.field) || typeof v.variant !== 'string'))) ||
        !Array.isArray(state.errors) || state.errors.some(error => typeof error?.field !== 'string' || (error.field && !ids.has(error.field)) ||
          typeof error.text !== 'string' || !error.text.trim()))) throw new Error('GigaCode вернул некорректный план сценария.');
  flow = { ...pendingFlow, states: plan.states, reply: plan.reply };
  pendingFlow = null;
  send('flowProposal', { reply: plan.reply, states: plan.states, labels: Object.fromEntries(confirmedFlowFields(source).map(field=>[field.field,field.label])) });
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
    return [{ ...state, errors, variants: (state.variants || []).filter(v => !rejected.has(v.field)) }];
  });
}

function applyStateToCopy(copy,state,source) {
  let skipped=0;
  let errorsPending=0;
  const fields = new Map(sourceFields(copy).map(n => [n.getPluginData('triplex-field-id'), n]));
  const sizes = [...fields.values()].map(n => [n, n.width, n.height]);
  for (const choice of state.variants || []) {
    const field = fields.get(choice.field);
    const current = field?.mainComponent;
    const variant = current?.parent?.type === 'COMPONENT_SET' && current.parent.children.find(n => n.type === 'COMPONENT' && n.name === choice.variant);
    if (!variant || typeof field.swapComponent !== 'function') throw new Error('Недоступен вариант «' + choice.variant + '». Уточните состояние в чате.');
    const values = field.componentProperties || {};
    field.swapComponent(variant);
    const compatible = Object.fromEntries(Object.entries(values).filter(([key, prop]) => ['TEXT', 'BOOLEAN'].includes(prop.type) && field.componentProperties?.[key]?.type === prop.type).map(([key, prop]) => [key, prop.value]));
    if (Object.keys(compatible).length) field.setProperties(compatible);
  }
  for (const [id, value] of Object.entries(state.values)) {
    const field = fields.get(id);
    const key = Object.entries(field?.componentProperties || {}).find(([name, prop]) => /^(?:value|input[ _-]?value|значение)(?:#|$)/i.test(name) && prop.type === 'TEXT')?.[0];
    if (key) field.setProperties({ [key]: value });
    else skipped++;
  }
  const annotations = [state.condition];
  for (const error of state.errors) {
    const field = fields.get(error.field);
    const props = Object.entries(field?.componentProperties || {});
    const key = props.find(([name, prop]) => /error|validation|ошиб/i.test(name) && prop.type === 'TEXT')?.[0];
    if (key) {
      const values = { [key]: error.text };
      for (const [name, prop] of props) if (prop.type === 'BOOLEAN' && /error|ошиб/i.test(name)) values[name] = true;
      field.setProperties(values);
    } else errorsPending++;
    annotations.push((field?.getPluginData('triplex-field-label') || 'Форма') + ' — ' + error.text);
  }
  for (const [node, width, height] of sizes) node.resizeWithoutConstraints(width, height);
  copy.resizeWithoutConstraints(source.width, source.height);
  copy.setPluginData('triplex-flow-errors', JSON.stringify(state.errors));
  return {skipped,errorsPending,annotations};
}

async function createStates() {
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
      const rendered=applyStateToCopy(copy,state,source);
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
  if (!['MODEL_LABEL', 'MODEL_REVISION', 'MODEL_IDENTITY', 'MODEL_JSON'].includes(error.code) || !prepared || !['review', 'reviewDialog'].includes(message.type) || prepared.labelRepairAttempted) return false;
  prepared.labelRepairAttempted = true;
  const dialog = message.type === 'reviewDialog';
  const prompt = [
    'Исправь формат своего ответа. Не меняй смысл задачи и ранее согласованные решения.',
    'Ошибка проверки: ' + error.message,
    'СВЕРЬ ССЫЛКИ: key, id и component должны относиться к ОДНОЙ строке текущего catalog. component копируй из doc или полного name. Старые номера и номера из справочника недействительны. Не меняй требуемый смысл компонента ради ошибочного ID.',
    'Используй только uid,id,key,component,text,placeholder,value,readOnly,optionExample,values,variant. catalogId/componentId означают id типа. name/confirmed/reason — метаданные, их можно опустить. Для удаления исключи uid из итогового items. Не отменяй правки пользователя.',
    'У каждой новой строки items обязательны key, component и непустой text: видимая подпись до 120 символов. Не передавай объект вместо строки. Для существующей строки с uid можно пропустить text, тогда сохранится прежняя подпись.',
    dialog ? 'Верни JSON с action:list, reply и полным итоговым items с учётом последних правок пользователя. Для замены типа передай uid и новый key с component.' : 'Верни JSON с reply и полным items: [{key:"ключ из catalog",component:"doc или точное name",text:"Подпись",placeholder:""}].',
    JSON.stringify({ task: prepared.task, standard: prepared.standard, conversation:modelConversation(),
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
    'Ответь JSON: {"reply":"ответ пользователю","action":"reply|configure|list","updates":[{"uid":1,"variant":0,"values":{},"error":""}],"items":[{"uid":1}]}',
    'reply — вопрос или объяснение без изменений. configure — изменения свойств, текстов, ошибок любого существующего компонента.',
    'На этапе list правки подписей, подсказок, значений, readOnly и ошибок передавай в updates через text, placeholder, value, readOnly, error. На остальных этапах используй values и variant.',
    'При замене типа НЕ передавай values и variant от старого компонента. Передай uid, key, component и изменяемые подписи/значения; новый компонент будет настроен отдельно. TextView — отображение текста, не TextField для ввода. Если в каталоге это Text, укажи component:Text и его key.',
    'При добавлении и замене типа обязательно передай component из doc и key из той же строки каталога. ID не переносится между каталогами. Для сохранения существующего поля достаточно uid. Весь тип сверяется кодом до импорта.',
    'updates содержит только изменяемые поля. values использует точные ключи fields. variant — индекс из variants. Не выдумывай ключи и варианты.',
    'На этапе list любые правки возвращай action:list и полный итоговый items. Удали из items ненужные строки. {"uid":1} сохраняет компонент, {"uid":1,"id":7} ЗАМЕНЯЕТ его тип на id=7 из каталога, сохраняя подпись. {"id":7,"text":"Подпись"} добавляет новый компонент. Поля text/placeholder/value/readOnly меняют настройки строки.',
    'Замены типов и удаление на любом этапе требуют action:list с полным итоговым набором. Не сообщай о замене только в reply. Если нужен уточняющий вопрос, верни action:reply, needsClarification:true и reply с вопросом. Не утверждай, что что-то изменено, без изменений в items/updates.',
    'Пример: убрать BodyPage и Island — исключить их uid; заменить MaskedField — сохранить uid поля и указать id TextField. Для расчётного счёта выбрать id SuggestField. Указания пользователя важнее рекомендации справочника. Краткий ответ разбивай на абзацы; не дублируй весь каталог в reply.',
    'uid — уникальный номер уже добавленного поля из components. catalogId/id — тип из каталога. Несколько Text Field могут иметь один catalogId, но разные uid. Копируй uid из components, не используй порядковый номер или catalogId вместо него. Каждый uid в items встречается один раз. Для нового поля передавай только id без uid; для замены существующего — uid и новый id.',
    'При list можно также передать updates для существующих компонентов. Сохраняй все незатронутые решения. Если выполнить просьбу по доступным свойствам нельзя, объясни это в reply.',
    'Кнопки запрещены. Не предлагай ошибки и состояния до закрепления верстки. Выбирай специализированные компоненты по смыслу, не заменяй выбор, даты и переключатели TextField. По вопросу о TextField объясни выбор на основе переданного каталога.',
    JSON.stringify({ conversation:modelConversation(), task: prepared.task, standard: prepared.standard, stage: prepared.stage, components, variantsByCatalogId: definitions,
      catalog: modelCatalog(prepared.catalog) })
  ].join('\n') });
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
    else if (JSON.stringify([previous.text, previous.placeholder, previous.value, previous.readOnly, previous.optionExample, previous.variant, previous.values]) !==
      JSON.stringify([item.text, item.placeholder, item.value, item.readOnly, item.optionExample, item.variant, item.values])) changes.push('Обновлён: ' + item.text);
  }
  if (!changes.length && before.map(item => item.uid).join(',') !== after.map(item => item.uid).join(',')) changes.push('Изменён порядок компонентов.');
  return changes;
}

function revisionFormatError(message) {
  const error = new Error(message);
  error.code = 'MODEL_REVISION';
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

function normalizeRevisionResponse(response, currentItems) {
  if (response.updates !== undefined) {
    if (!Array.isArray(response.updates)) throw revisionFormatError('updates должен быть списком правок.');
    response.updates = response.updates.map(normalizeRevisionEntry);
  }
  if (response.items !== undefined) {
    if (!Array.isArray(response.items)) throw revisionFormatError('items должен быть итоговым списком.');
    response.items = response.items.map(normalizeRevisionEntry);
  }
  // A structural patch is also valid: expand it to the complete authoritative list.
  if (response.action === 'configure' && response.updates?.some(change => change.id !== undefined || change.key !== undefined || change.remove === true)) {
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
    throw new Error('Модель ответила текстом, но не передала новый набор. Правки не применены. Повторите отправку или уточните запрос.');
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
      if(oldValue)item.value=oldValue[1];
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
    item.error = '';
    if (replace || revisionSummary([previous], [item]).length) item.confirmed = false;
    return item;
  });
  const changesApplied = revisionSummary(context.items, nextItems);
  if (!changesApplied.length) throw new Error('Модель вернула прежний набор без изменений. Правки не применены. Повторите отправку или уточните запрос.');
  const descriptions = nextItems.map(describeSummary);
  context.items = nextItems;
  context.stage = 'list';
  context.index = 0;
  context.revisionPending = false;
  activePreview?.cancel();
  activePreview = undefined;
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
  normalizeRevisionResponse(response, context.items);
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
    candidate.values = Object.fromEntries(Object.entries(current.values || {}).filter(([key]) => fields.has(key)));
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
    updated.set(change.uid, candidate);
  }
  let nextItems = context.items.map(item => updated.get(item.uid));
  const actualChanges = revisionSummary(context.items, nextItems);
  if (!actualChanges.length) throw new Error('Модель не передала изменений. Правки не применены.');
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
    if (draft) await configureItem(draft, false, false);
    if (prepared.index === 0) {
      activePreview?.cancel(); activePreview=undefined;
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
    const compatible = new Map(editableProperties(item.variants[variant]));
    const priorValues = Object.entries(values || item.values || {});
    item.variant = variant;
    item.values = Object.fromEntries(priorValues.filter(([key, value]) =>
      compatible.get(key)?.type === (typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT')));
    values = undefined;
    if (typeof error === 'string') item.error = error.trim().slice(0, 3000);
    item.fillKeys = undefined;
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
    overrides[key] = value;
    const type = typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT';
    if (fields[key]?.type !== type) throw new Error('Недоступно свойство «' + key + '» в «' + name + '».');
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
    let fonts = typeof layer.getRangeAllFontNames === 'function' && layer.characters.length
      ? layer.getRangeAllFontNames(0, layer.characters.length) : [layer.fontName];
    if (!fonts.every(font => font && typeof font.family === 'string')) {
      fonts = (layer.textStyles || []).map(range => range.textStyle?.fontName).filter(Boolean);
    }
    if (!fonts.length) throw new Error('Не удалось определить шрифт вложенной подписи.');
    for (const font of fonts) {
      const key = JSON.stringify(font);
      if (loadedFonts.has(key)) continue;
      progress('Загружаю шрифт ' + font.family + ' ' + font.style);
      await pixso.loadFontAsync(font);
      if (instance.removed) throw new Error('Подготовка превью отменена.');
      loadedFonts.add(key);
    }
    layer.characters = value;
    if (layer.characters !== value) throw new Error('Pixso не применил текст вложенной подписи в «' + name + '».');
  }
}

let previewSequence = 0;
let activePreview;

async function publishPreview(type, item, message, suggest = false) {
  await ensureComponentLabel(item.variants[item.variant]);
  activePreview?.cancel();
  activePreview=undefined;
  const component=item.variants[item.variant];
  let description=describeItem(item,suggest);
  const previewId=++previewSequence;
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
      send('previewProgress',{previewId,stage:'Экспортирую превью до 960 px'});
      await yieldToEditor();
      if(cancelled)return;
      const png=await instance.exportAsync(previewExportSettings(instance));
      result={png:Array.from(png)};
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
  send('applied', { count: inserted.length, target: body.name });
}

let messageQueue = Promise.resolve();
pixso.ui.onmessage = message => {
  messageQueue = messageQueue.then(() => handleMessage(message));
};

function removePlannedItem(uid) {
  if (!prepared?.items || !['list','copy','ready'].includes(prepared.stage)) throw new Error('Удаление доступно до вставки компонентов на фрейм.');
  if (prepared.revisionPending) throw new Error('Сначала завершите правки в чате или оставьте текущий набор.');
  const index = prepared.items.findIndex(item => item.uid === uid);
  if (index < 0) throw new Error('Компонент уже удалён или больше не входит в набор.');
  const item = prepared.items[index];
  activePreview?.cancel(); activePreview = undefined;
  prepared.items = prepared.items.filter(candidate => candidate.uid !== uid);
  prepared.stage = 'list'; prepared.index = 0;
  const change = 'Удалён: ' + item.text + ' · ' + item.name;
  conversation.push({ role:'user', text:'Убрать компонент «' + item.text + '» из набора (uid=' + uid + ').' });
  conversation.push({ role:'assistant', text:change });
  send('proposal', { target:pixso.getNodeById(prepared.bodyId)?.name, items:prepared.items.map(describeSummary), changes:[change], revisionPending:false });
}

async function handleCommand(message) {
  try {
    switch (message.type) {
      case 'init':
        send('ready', { lightboxSizes });
        break;
      case 'lockLayout': {
        if (!approvedSource) throw new Error('Сначала добавьте компоненты на фрейм.');
        const source = getActiveForm(approvedSource.frameId);
        approvedSource.signature = layoutSignature(source);
        source.locked = true;
        flow = null; pendingFlow = null; flowApproved = false;
        send('layoutLocked');
        break;
      }
      case 'unlockLayout': {
        if (approvedSource) {
          getActiveForm(approvedSource.frameId).locked = false;
          delete approvedSource.signature;
        }
        flow = null; pendingFlow = null; flowApproved = false;
        send('layoutUnlocked');
        break;
      }
      case 'requestFlow':
        requestFlow(message);
        break;
      case 'reviewFlow':
        reviewFlow(message);
        break;
      case 'invalidateFlow':
        pendingFlow = null;
        flowApproved = false;
        break;
      case 'approveFlow':
        if (pendingFlow || !flow?.states.length) throw new Error('Сначала получите список состояний для утверждения.');
        lockedSource();
        flow.selected = selectFlow(message.selection,editedFlowStates(message.edits));
        if (!flow.selected.length) throw new Error('Выберите хотя бы одно состояние или ошибку.');
        flowApproved = true;
        send('flowApproved');
        break;
      case 'previewFlowState':
        await previewFlowState(message);
        break;
      case 'createStates':
        await createStates();
        break;
      case 'prepare':
        prepared = null;
        await prepare(message);
        break;
      case 'placeLightbox':
        await placeLightbox(message.size);
        break;
      case 'removeItem':
        removePlannedItem(message.uid);
        break;
      case 'discardRevision':
        if (prepared) {
          prepared.revisionPending = false;
          conversation.push({ role: 'user', text: 'Последние правки отменены. Оставить текущий фактический набор без изменений.' });
        }
        send('revisionDiscarded');
        break;
      case 'dialog':
        if (message.draft && prepared?.stage === 'copy') await configureItem(message.draft, false, false);
        await requestConversation(message);
        break;
      case 'reviewDialog':
        await reviewConversation(message.raw);
        break;
      case 'revise': {
        const revision = typeof message.revision === 'string' ? message.revision.trim() : '';
        if (prepared?.stage !== 'list' || !prepared.items || !revision || revision.length > 3000) {
          throw new Error('Опишите правки к предложению (до 3000 символов).');
        }
        sendPlanRequest(revision);
        break;
      }
      case 'review':
        await review(message.raw);
        break;
      case 'backComponent':
        await backComponent(message.draft);
        break;
      case 'openProperties':
        await openProperties();
        break;
      case 'requestCopy':
        if (message.draft && prepared?.stage === 'copy') await configureItem(message.draft, false, false);
        requestCopy(message.revision);
        break;
      case 'reviewCopy':
        await reviewCopy(message.raw);
        break;
      case 'renderPreview':
        if (activePreview?.previewId === message.previewId) activePreview.start();
        break;
      case 'cancelPreview':
        if (activePreview?.previewId === message.previewId) {
          activePreview.cancel();
          activePreview = undefined;
        }
        break;
      case 'chooseVariant':
      case 'previewItem':
      case 'confirmItem':
        await configureItem(message, message.type === 'confirmItem');
        break;
      case 'unconfirmItem':
        if (prepared?.items?.[message.index]) prepared.items[message.index].confirmed = false;
        break;
      case 'apply':
        await apply();
        break;
    }
  } catch (error) {
    try { if (requestLabelRepair(message, error)) return; } catch (repairError) { error = repairError; }
    const stage = { prepare: 'Подготовка запроса', review: 'Проверка предложения', apply: 'Вставка полей' }[message.type];
    const detail = error.message || String(error);
    send('error', { message: stage ? stage + ' — ' + detail : detail, revisionPending: Boolean(prepared?.revisionPending) });
  }
};

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
  for (const key of ['task','standard','feedback','revision','size']) if (typeof value?.[key] === 'string') result[key] = value[key];
  for (const key of ['hasFlowDraft','hasFlowResponse']) result[key] = value?.[key] === true;
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
  activePreview?.cancel(); activePreview = undefined;
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
  activePreview?.cancel(); activePreview = undefined;
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
    warning='Макет изменился после сохранения. Перед созданием состояний закрепите верстку повторно.';
  }
  send('sessionRestored', { sessionId, ui:sessionUI, readOnly:sessionReadOnly, warning,
    stage: plan?.stage || (approvedSource?'done':'list'), hasSource:Boolean(approvedSource), formPlaced:Boolean(activeFormId),
    layoutLocked:Boolean(approvedSource?.signature), flowApproved, flow, revisionPending:plan?.revisionPending===true,
    items: !sessionReadOnly ? prepared?.items?.map((item,index)=>prepared.stage==='copy'&&index===prepared.index?describeItem(item):describeSummary(item)) || [] : (plan?.items || []).map(({name,text})=>({name,text})),
    labels:activeFormId && pixso.getNodeById(activeFormId) ? Object.fromEntries(confirmedFlowFields(pixso.getNodeById(activeFormId)).map(field=>[field.field,field.label])) : {},
    index:plan?.index || 0 });
}

async function handleMessage(message) {
  if (message.type === 'init') {
    await handleCommand(message);
    try { send('historyList', { sessions:readHistory().sessions }); } catch(error) { send('historyError',{message:error.message}); }
    return;
  }
  if (['saveSessionUI','listHistory','openSession','newSession'].includes(message.type)) {
    try {
      if (message.type === 'saveSessionUI') { if(!sessionReadOnly) { sessionUI=cleanSessionUI(message.ui); persistSession(); } }
      if (message.type === 'listHistory') send('historyList',{sessions:readHistory().sessions});
      if (message.type === 'openSession') { persistSession(); await restoreSession(message.id); }
      if (message.type === 'newSession') { persistSession(); newSession(); send('sessionRestored',{ui:{},items:[],stage:'list'}); send('historyList',{sessions:readHistory().sessions}); }
    } catch(error) { send('historyError',{message:error.message}); }
    return;
  }
  if(message.type==='dialog' || message.type==='prepare') {
    send('requestProgress',{message:'Pixso получил правки. Готовлю контекст для GigaCode…'});
    if(message.ui && !sessionReadOnly) sessionUI=cleanSessionUI(message.ui);
  }
  if (sessionReadOnly) { send('error',{message:'Этот диалог открыт только для чтения. Восстановите исходный фрейм или начните новый диалог.'}); return; }
  if (message.type==='placeLightbox' && activeFormId && sessionId) {
    try { persistSession(); newSession(); } catch(error) { send('historyError',{message:error.message});return; }
  }
  const editorStartedAt=Date.now();
  await handleCommand(message);
  const editorPreparedAt=Date.now();
  if (!['renderPreview','cancelPreview','previewItem','previewFlowState'].includes(message.type)) {
    try { persistSession(); } catch(error) { send('historyError',{message:'Не удалось сохранить диалог: '+error.message}); }
  }
  if(['dialog','prepare','review','reviewDialog','openProperties','previewItem','chooseVariant','previewFlowState'].includes(message.type)) {
    send('editorMetrics',{operation:message.type,prepareMs:editorPreparedAt-editorStartedAt,saveMs:Date.now()-editorPreparedAt});
  }
}
