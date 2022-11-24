/** @jest-environment jsdom */

import commmentCounter from '../modules/commentCounter.js';

describe('Count No of comments on the DOM', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = `
        <div class="comments-section">

        </div>
            `;
  });

  const createCommentHtml = ({ username, comment, creationDate }) => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-bubble';

    commentDiv.innerHTML = `
            <div class="txt user-comment">
                <p class="name">${username}</p>
                <p class="message">${comment}</p>
                <span class="timestamp">${creationDate}</span>
            </div>
            <div class="comment-arrow"></div>
          `;

    return commentDiv;
  };

  const item1Comments = [{
    username: 'Jake',
    comment: 'It tastes nice',
    creationDate: '24/11/2022',
  },
  {
    username: 'mike',
    comment: 'It was nice',
    creationDate: '22/11/2022',
  },
  {
    username: 'Val',
    comment: 'It was good',
    creationDate: '1/11/2022',
  },
  ];

  const item2Comments = [];

  test('Get correct no of comments greater than 1', () => {
    const displayComments = () => {
      const cmtSection = document.querySelector('.comments-section');
      item1Comments.forEach((comment) => {
        cmtSection.append(createCommentHtml(comment));
      });
    };
    displayComments();

    const result = commmentCounter();

    expect(result).toBe(3);
  });

  test('Meal item has no comment', () => {
    const displayComments = () => {
      const cmtSection = document.querySelector('.comments-section');
      item2Comments.forEach((comment) => {
        cmtSection.append(createCommentHtml(comment));
      });
    };
    displayComments();

    const result = commmentCounter();

    expect(result).toBe(0);
  });

  test('Comment to have created_at_date', () => {
    const newComments = [{
      username: 'Val',
      comment: 'It tastes nice',
      creationDate: '24/11/2022',
    }];

    const displayComments = () => {
      const cmtSection = document.querySelector('.comments-section');
      newComments.forEach((comment) => {
        cmtSection.append(createCommentHtml(comment));
      });
    };
    displayComments();
    const timeStamp = document.querySelector('.timestamp');

    const result = commmentCounter();

    expect(result).toBe(1);
    expect(timeStamp.textContent).toBe(newComments[0].creationDate);
  });
});