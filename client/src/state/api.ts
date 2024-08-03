import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	DashboardMetrics,
	ExpenseByCategorySummary,
	Product,
	User,
} from "@/types";
import { ProductFormData } from "@/app/products/CreateProductModal";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
	}),
	reducerPath: "api",
	tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
	endpoints: (build) => ({
		getDashboardMetrics: build.query<DashboardMetrics, void>({
			query: () => ({
				url: "/dashboard",
				method: "GET",
			}),
			providesTags: ["DashboardMetrics"],
		}),
		getProducts: build.query<Product[], string | void>({
			query: (search) => ({
				url: `/products`,
				params: search ? { search } : undefined,
				method: "GET",
			}),
			providesTags: ["Products"],
		}),
		createProduct: build.mutation<Product, ProductFormData>({
			query: (product) => ({
				url: "/products",
				method: "POST",
				body: product,
			}),
			invalidatesTags: ["Products"],
		}),
		getUsers: build.query<User[], void>({
			query: () => ({
				url: "/users",
				method: "GET",
			}),
			providesTags: ["Users"],
		}),
		getExpensesByCategory: build.query<ExpenseByCategorySummary[], void>({
			query: () => ({
				url: "/expenses",
				method: "GET",
			}),
			providesTags: ["Expenses"],
		}),
	}),
});

export const {
	useGetDashboardMetricsQuery,
	useGetProductsQuery,
	useCreateProductMutation,
	useGetUsersQuery,
	useGetExpensesByCategoryQuery,
} = api;
