$(function(){
  const today = new Date().getFullYear();
  if(2024 === today){
    $('#full-year').text(today);
  }else{
    $('#full-year').text('2024-'+today);
  }
});