const prompts = require('prompts');
const kleur = require('kleur');

(async () => {
	setInterval(() => {}, 1000);
	const item =  await prompts([
		{
			type: 'text',
			name: 'amount',
			message: 'kleur',
			onRender(kleur) {
				this.msg = kleur.cyan('How many enchanted do you need?');
			}
		},
		{
			type: 'text',
			name: 'price',
			message: 'kleur',
			onRender(kleur) {
				this.msg = kleur.yellow('What is the price of the item?');
			}
		}
	]);

	console.log(kleur.green(item.amount * 160 * item.price + ' Is the price of your Enchanted Item.'));
})();
