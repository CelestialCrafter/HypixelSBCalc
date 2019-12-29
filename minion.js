const prompts = require('prompts');
const kleur = require('kleur');
const speed = require('./minionspeeds');

(async () => {
	setInterval(() => {}, 1000);
	const minion =  await prompts([
		{
			type: 'text',
			name: 'type',
			message: 'kleur',
			onRender(kleur) {
				this.msg = kleur.cyan('What minion do you need to calculate?');
			}
		},
		{
			type: 'number',
			name: 'items',
			message: 'kleur',
			onRender(kleur) {
				this.msg = kleur.cyan('How many items do you need?');
			}
		},
		{
			type: 'number',
			name: 'level',
			message: 'kleur',
			onRender(kleur) {
				this.msg = kleur.cyan('What level is the minion?');
			}
		}
	]);

	const time = speed[minion.type][minion.level - 1] / 2;
	console.log(kleur.green('It will take around ' + minion.items * time + ' secconds to get the items.'));
})();
