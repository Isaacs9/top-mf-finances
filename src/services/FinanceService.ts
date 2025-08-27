import {Finance} from "../domain/FinanceEntity";

export class FinanceService {
    private baseUrl = "http://localhost:3000/finances";

    async list(): Promise<Finance[]> {
        const res = await fetch(this.baseUrl, { credentials: "include" });
        return res.json();
    }

    async create(user: Finance): Promise<Finance> {
        const res = await fetch(this.baseUrl, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        return res.json();
    }

    async update(id: number, nome: string, email: string): Promise<Finance> {
        const res = await fetch(`${this.baseUrl}/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email }),
        });
        return res.json();
    }

    async delete(id: number): Promise<void> {
        await fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
    }
}
