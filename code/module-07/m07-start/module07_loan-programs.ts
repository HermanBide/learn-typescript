/*  TODO Add the import statement. */
interface Loan {
    principle: number;
    interestRate: number;
}

interface ConventionalLoan extends Loan {
    months: number;
}

/*  TODO Update the calculateInterestOnlyLoanPayment function. */
const calculateInterestOnlyLoanPayment = (loanTerms: Loan): string => {
    let payment: number;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    let interest: number = calculateInterestRate(loanTerms.interestRate);
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function calculateInterestRate (interestRate: number): number {
    let interest: number = interestRate / 1200;
    return interest
}