import styles from '../ModerationQuestions/moderationQuestion.scss';

function ModerationQuestion({ data, isLoading }) {
	return /*html*/ `
    <div class="${styles.container}">
    ${isLoading
		? `<div class="${styles.loading}">
    <div class="${styles.loader}"></div>
    <div class="${styles.loadtext}">Đang xóa...</div>
  </div>`
		: ''}
      <h1>Danh Sách các câu hỏi được đóng góp</h1>
      ${data
			.map((item) => {
				return `
          <div class="${styles.content}">
            <div class="${styles.item}">
              <div class="${styles.title}">Câu Hỏi</div>
              <div class="${styles.question}">${item.question}</div>
            </div>  
            <div class="${styles.item}">
              <div class="${styles.title}">Các Đáp án</div>
              <div>${item.answers
					.map((item) => {
						return `
                  <div class="${styles.answer}">
                    <div class="${styles.value}">${item.value}</div>
                    <div class="${styles.iscorrect}">${item.isCorrect ? 'Đáp án Đúng' : ''}</div>
                  </div>
                `;
					})
					.join('')}</div>
              </div>  
              <div class="${styles.item}">
              <div class="${styles.title}">Điểm</div>
              <div class="${styles.score}">${item.score}</div>
            </div>  
            <div class="${styles.item}">
              <div class="${styles.title}">Độ Khó</div>
              <div class="${styles.level}">${item.level}</div>
            </div>  
            <div class="${styles.item}">
              <div class="${styles.title}">Chức Năng</div>
              <div class="${styles.action}">
                <button data-id="${item.id}" type="button" class="btn btn-success ${styles.button}" data-button="add-question-${item.id}">Chọn</button>
                <button data-id="${item.id}" type="button" class="btn btn-primary ${styles.button}" data-button="edit-question-${item.id}">Sửa</button>
                <button data-id="${item.id}" type="button" class="btn btn-danger" data-button="delete-question-${item.id}">Xóa</button>
              </div>
            </div>  
          </div>
        `;
			})
			.join('')}
    </div>
  `;
}

export default ModerationQuestion;
