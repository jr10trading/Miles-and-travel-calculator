// Função para formatar valores em reais
function formatMoney(value) {
    return 'R$ ' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Função para formatar valores em pontos
function formatPoints(value) {
    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " pontos";
}

// Função para formatar valores em milhas
function formatMiles(value) {
    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " milhas";
}

// Função para formatar valores em porcentagem
function formatPercentage(value) {
    return value + '%';
}

// Função para calcular o gasto anual
function calcularGastoAnual() {
    const monthlyExpense = parseFloat(document.getElementById('monthlyExpense').value);
    const annualExpense = monthlyExpense * 12;
    document.getElementById('annualExpense').textContent = formatMoney(annualExpense);
}

// Adiciona um evento de escuta ao campo "Gasto mensal" para calcular o "Gasto anual" sempre que o valor for alterado
document.getElementById('monthlyExpense').addEventListener('input', calcularGastoAnual);

// Adiciona um evento de escuta ao botão de calcular
document.getElementById('calculateButton').addEventListener('click', function() {
    // Obter os valores dos inputs
    const monthlyExpense = parseFloat(document.getElementById('monthlyExpense').value);
    const pointsPerReal = parseFloat(document.getElementById('pointsPerReal').value);
    const bonusTransfer = parseFloat(document.getElementById('bonusTransfer').value) / 100;
    const milheiroValue = parseFloat(document.getElementById('milheiroValue').value);

    // Calcular os valores
    const totalPointsMonth = monthlyExpense * pointsPerReal;
    const totalPointsYear = totalPointsMonth * 12;
    const totalMilesMonth = totalPointsMonth * (1 + bonusTransfer);
    const totalMilesYear = totalMilesMonth * 12;
    const totalValueMonth = milheiroValue * (totalMilesMonth / 1000);
    const totalValueYear = totalValueMonth * 12;

    // Exibir os resultados
    document.getElementById('totalPointsMonth').textContent = formatPoints(totalPointsMonth);
    document.getElementById('totalPointsYear').textContent = formatPoints(totalPointsYear);
    document.getElementById('totalMilesMonth').textContent = formatMiles(totalMilesMonth);
    document.getElementById('totalMilesYear').textContent = formatMiles(totalMilesYear);
    document.getElementById('totalValueMonth').textContent = formatMoney(totalValueMonth); // Mantém o formato de reais
    document.getElementById('totalValueYear').textContent = formatMoney(totalValueYear); // Mantém o formato de reais
});


// Adiciona um evento de escuta ao botão de calcular
document.getElementById('calculateButton').addEventListener('click', function() {
    // Obter os valores dos inputs
    const invoiceValue = parseFloat(document.getElementById('invoiceValue').value);
    const pointsPerDollar = parseFloat(document.getElementById('pointsPerDollar').value);
    const dollarRate = parseFloat(document.getElementById('dollarRate').value);
    const bonusTransferCard = parseFloat(document.getElementById('bonusTransferCard').value) / 100;

    // Calcular os valores
    const totalPointsMonthCard = (invoiceValue / dollarRate) * pointsPerDollar;
    const totalPointsYearCard = totalPointsMonthCard * 12;
    const totalMilesMonthCard = totalPointsMonthCard * (1 + bonusTransferCard);
    const totalMilesYearCard = totalMilesMonthCard * 12;
    const totalMilesOrganicYear = totalMilesYearCard + 312000; // Adiciona as milhas do campo "Compras bonificadas"

    // Exibir os resultados
    document.getElementById('totalPointsMonthCard').textContent = totalPointsMonthCard.toFixed(0) + " pontos";
    document.getElementById('totalPointsYearCard').textContent = totalPointsYearCard.toFixed(0) + " pontos";
    document.getElementById('totalMilesMonthCard').textContent = totalMilesMonthCard.toFixed(0) + " milhas";
    document.getElementById('totalMilesYearCard').textContent = totalMilesYearCard.toFixed(0) + " milhas";
    document.getElementById('totalMilesOrganicYear').textContent = totalMilesOrganicYear.toFixed(0) + " milhas";
});
