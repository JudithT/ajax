$.get('/fortune', (response)=>{
  // ('#fortune-text').insert(response);

  const adj = response;
  $('#fortune-text').html(adj);
});