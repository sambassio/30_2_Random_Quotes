const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "A focused fool can accomplish more than a distracted genius.",
    "How to stay poor: Start tomorrow.",
    "The most addictive drug is making money doing something you love.",
    "Most already know what to do and simply don't do it. It's not ignorance. It's fear.",
    "When I was poor I saved so that I could invest in me, not the S&P 500. I can 10x my income with better skills. The S&P 500 cannot.",
    "The easiest way to change your behavior is to change your surroundings.",
    "Make people decide. Money enters your life as the result of outcomes.",
    "We pay for every lesson with either time or money. And we use the currency we value least.",
    "For anyone starting a business, focus on getting $1 from a stranger into your bank account.",
    "Strategy is easy. Execution is hard.",
    "Volume x Time = Skill.",
    "During my hardest days, I repeated the same phrase to myself: I cannot lose if I do not quit.",
    "Everything is hard in some way. It’s hard to be in the wrong relationship. It’s hard to be in the right one. It’s hard to be broke and miserable, it’s hard to achieve your dreams. It’s hard to be stuck in the middle, not really feeling anything at all. Everything is hard, but you choose your hard. You choose what’s worth it. You don’t choose whether or not you’ll suffer, but you do choose what you want to suffer for. Brianna Wiest",
    "Your future is the result of your daily actions. You’re defined by what you do today. Lazy now, loser later. Get to work.",
    "Your mindset is like a muscle, the more you exercise it, the stronger it becomes.",
    "A good plan today is better than a perfect plan tomorrow. You’ve gotta do something and you’ve gotta do something fast.",
    "The only person responsible for your success or failure is you."
    // Add more quotes as needed
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', () => {
    const quote = getRandomQuote();
    document.getElementById('quote-text').textContent = quote;
});

// Generate an initial quote on page load
document.getElementById('quote-text').textContent = getRandomQuote();
