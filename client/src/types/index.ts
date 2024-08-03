export interface User {
	userId: string;
	name: string;
	email: string;
}

export interface Product {
	productId: string;
	name: string;
	price: string;
	rating?: number;
	stockQuantity: number;
}

export interface SalesSummary {
	salesSummaryId: string;
	totalValue: number;
	changePercentage?: number;
	date: string;
}

export interface PurchaseSummary {
	purchaseSummaryId: string;
	totalPurchased: number;
	changePercentage?: number;
	date: string;
}

export interface ExpenseSummary {
	expenseSummaryId: string;
	totalExpenses: number;
	date: string;
}

export interface ExpenseByCategorySummary {
	ExpenseByCategorySummaryId: string;
	category: string;
	amount: string;
	date: string;
}

export interface DashboardMetrics {
	popularProducts: Product[];
	salesSummary: SalesSummary[];
	purchaseSummary: PurchaseSummary[];
	expenseSummary: ExpenseSummary[];
	expenseByCategorySummary: ExpenseByCategorySummary[];
}
