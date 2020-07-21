const dataForm = [
  {
    name: "question",
    type: "textarea",
    label: "Câu hỏi",
    placeholder: "Nhập Câu Hỏi",
  },
  {
    name: "answers",
    type: "inputTextGroup",
    label: "Các đáp án",
    group: [
      {
        name: "A",
        value: "",
      },
      {
        name: "B",
        value: "",
      },
      {
        name: "C",
        value: "",
      },
      {
        name: "D",
        value: "",
      },
    ],
  },
  {
    name: "level",
    type: "selectlevel",
    label: "Độ Khó",
    options: [
      {
        label: "Easy",
        value: "easy",
      },
      {
        label: "Normal",
        value: "normal",
      },
      {
        label: "Hard",
        value: "hard",
      },
    ],
  },
];

export default dataForm;
