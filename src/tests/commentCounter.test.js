/** @jest-environment jsdom */

import commmentCounter from "../modules/commentCounter";

describe('Count No of comments', ()=> {
    beforeEach(() => {
        jest.clearAllMocks();
        document.body.innerHTML = `
        <div class="comments-section">

        </div>
            `;

        const createCommentHtml = ({username, comment, creationDate }) => {
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
        }

        let comments = [
            {
                username: 'Jake',
                comment: 'It tastes nice',
                creationDate: '24/11/2022'
            },
            {
                username: 'mike',
                comment: 'It was nice',
                creationDate: '22/11/2022'
            },
            {
                username: 'Val',
                comment: 'It was good',
                creationDate: '1/11/2022'
            },
        ]

        const displayComments = () => {
            const cmtSection = document.querySelector('.comments-section');
            comments.forEach(comment => {
                cmtSection.append(createCommentHtml(comment))
            })
            console.log(cmtSection)
        }

        displayComments()

        

      });



      test('gets correct no of comments', ()=> {
        const cmtSection = document.querySelector('.comments-section');
        console.log(cmtSection)
      })

})