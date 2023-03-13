let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quote = [
    '"We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
    '"Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi',
    '"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',
    '"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
    '"When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
    '"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson',
    '"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren',
    '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." — Winston Churchill',
    '“Don’t let yesterday take up too much of today.” — Will Rogers',
    '“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown ',
    '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs',
    '“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law',
    '“To know how much there is to know is the beginning of learning to live.” —Dorothy West',
    '“Goal setting is the secret to a compelling future.” — Tony Robbins'
];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})