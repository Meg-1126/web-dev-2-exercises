$(document).ready(() => {
  // code here
  let urls = ['https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments'
];
  // ## Step 1: Load Posts
  
    $.ajax({
      method: 'get',
      url: urls[0],
      dataType: 'json',
    }).done((data) => {
        $.each(data, (i, post) => {
          $('#posts').append(`
            <div class='post${post.id}' >
             <h2>${post.title}, ${i}</h2>
             <p>${post.body}</p>
             <h3>Comment</h3>
            </div>
          `);
        });
    });
  

  // ## Step 2: Load Comments
   $.ajax({
    method: 'get',
    url: urls[1],
    dataType: 'json',
   }).done((data) => {
    
     console.log('get comments', data);
     $.each(data, (i, comment) => {
      let counter = 1;
      if (comment.postId === 1){
        $('.post').append(`
        <div class='comment'>
          <h2>Comment</h2>
          <p>${comment.body}</p>
        
        </div>
        `);
      }
     })
   });





});
