import styles from '../ContributeQuestion/contributequestion.scss';

function TextArea({ name, type, placeholder, label, defaultValue = '' }) {
	return /*html*/ `
    <div class="${styles.form_group}">
      <label class="${styles.form_label}">${label}:</label>
      <textarea name="${name}" class="${styles.form_enterquestion} field" type="${type}" placeholder="${placeholder}">${defaultValue}</textarea>
    </div>
  `;
}

function InputTextGroup({ label, group, name, defaultValue = [] }) {
	const renderInputText = (name) => (item, index) => {
		const value = (defaultValue.length && defaultValue[index].value) || item.value;
		const checked = (defaultValue.length && defaultValue[index].isCorrect) || false ? 'checked' : '';
		return /*html*/ `
      <div class="${styles.form_enteranswer}">${item.name}:
      <input type="text" name="${item.name}" value="${value}"/>
      <span>
        Chọn Đáp án đúng: 
        <input type="radio" name=${name} value="${item.name}" ${checked}/></span>
      </div>
    `;
	};
	return /*html*/ `
    <div class="${styles.form_group}">
      <label class="${styles.form_label}">${label}:</label>
      <div class="inputTextGroup" data-name="${name}">${group.map(renderInputText(name)).join('')}</div>
    </div>
  `;
}

function SelectLevel({ name, label, options, defaultValue = '' }) {
	const renderOption = (item) => {
		return /*html*/ `
      <option value="${item.value}" ${defaultValue === item.value ? 'selected' : ''}>${item.label}</option>
    `;
	};
	return /*html*/ `
    <div class="${styles.form_group}">
    <label class="${styles.form_label}">${label}</label>
    <select class="field" name="${name}">${options.map(renderOption).join('')}</select>
    </div>
  `;
}

function ContributeQuestions({ fields, defaultResult = {}, buttonText = 'submit', isAlertVisible = false }) {
	const renderField = (field) => {
		switch (field.type) {
			case 'textarea':
				return TextArea({
					name: field.name,
					type: field.type,
					placeholder: field.placeholder,
					defaultValue: defaultResult[field.name],
					label: field.label
				});
			case 'inputTextGroup':
				return InputTextGroup({
					group: field.group,
					label: field.label,
					defaultValue: defaultResult[field.name],
					name: field.name
				});
			case 'selectlevel':
				return SelectLevel({
					name: field.name,
					options: field.options,
					defaultValue: defaultResult[field.name],
					label: field.label
				});
			default:
				return '';
		}
	};
	return /*html*/ `
  <div class=${styles.header}>
    <div class=${styles.item} id="back">
      <div class="${styles.back}"></div>
    </div>
  </div>
  <div class=${styles.container}>
    <form action="" id="form-addquestion"> 
      ${fields.map(renderField).join('')}
        <div class="${styles.form_group}">
          <button type="submit">${buttonText}</button>
          ${isAlertVisible ? '<span>Cam on ban da dong gop cho chung toi</span>' : ''}
        </div>
    </form>
  </div>
`;
}

export default ContributeQuestions;
