// $('h1').click(function(){
//     // var x = 5;
//     // var htmlStr = `
//     //     <ul>
//     //         <li>A</li>
//     //         <li>B</li>
//     //         <li>${x}</li>
//     //     </ul>
//     //     <h1>New H1</h1>
//     // `;  // string interpolation
//     $('#playground').append("<h1>New H1</h1>");
// });

console.log($('div').attr('data-user'));
$('div').attr('data-whatever', 23);

$('#playground').on('click','h1',function(){
    $('#playground').append("<h1>New H1</h1>");
    alert("Anything we want");
});