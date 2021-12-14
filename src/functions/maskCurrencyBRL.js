export default function maskCurrencyBRL(value) {
	const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

	return formattedValue;
};