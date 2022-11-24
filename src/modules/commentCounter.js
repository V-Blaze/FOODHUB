const commmentCounter = () => {
  const comments = document.querySelectorAll('.user-comment');
  return comments.length;
};

export default commmentCounter;