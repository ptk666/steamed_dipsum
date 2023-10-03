const texts = [
    "Steamer magic, dumpling dreams, whispers of aroma. Bamboo dance, culinary symphony, flavor explosion, sensory delight. Steam's caress transforms the ordinary into the extraordinary, inviting exploration.",
    "Bao sensation, cloudlike buns, treasure-filled wonders. Steam's secret alchemy, indulgent surprises, flavor revelations, culinary journey.",
    "Green euphoria, vegetable medley, vibrant surrender to steam's gentle touch. Asparagus, broccoli, and spinach emerge, vibrant, crisp, and flavorful. The art of steam elevates simplicity into a culinary masterpiece.",
    "Fishy wonderland, flaky dreams, citrus embrace. Steam's tender magic, moist perfection, culinary poetry.",
    "Seafood extravaganza, briny melodies, fragrant ocean broth. Mussels, clams, shrimp delight in steam's embrace, revealing the essence of the sea's bounty.",
    "Eggscapade, soy drizzle, velvety enchantment. Steam's artistry, custardy symphony, mouthwatering perfection, culinary sorcery.",
    "Jasmine dreams, bamboo canvas, fluffy allure. Steam's gentle touch, aromatic grace, harmonious foundation for flavors to bloom.",
    "Dim sum adventure, bite-sized marvels, steamed treasures. Siu mai, har gow, endless exploration, culinary escapade.",
    "Amidst the steamy reverie, remember that steam is the unsung hero, transforming humble ingredients into a world of culinary pleasures, creating unforgettable dining experiences."
];

const form = document.querySelector('.generate');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem');

amount.min = 1;
amount.max = texts.length;


const randomText = (num) => {
    let new_arr = texts.slice(0, num);

    new_arr = new_arr.join(` <br/><br/> `);

    return new_arr;
}

form.addEventListener('submit', (e) => {
    let max = parseInt(amount.value);

    const item = randomText(max);

    result.children[0].innerHTML = item;
    e.preventDefault();

})
