import { useEffect, useState } from "react";
import { useAuth } from "host/useAuth";
import {Finance} from "../domain/FinanceEntity";
import {FinanceService} from "../services/FinanceService";
import {FinanceForm} from "../components/FinanceForm";
import {FinanceList} from "../components/FinanceList";

export function FinancesPage() {
    const { user } = useAuth();
    const [finances, setFinances] = useState<Finance[]>([]);

    const service = new FinanceService(user?.token || "");

    const fetchData = async () => {
        if (!user) return;
        const data = await service.list();
        setFinances(data);
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    const handleCreate = async (finance: Finance) => {
        await service.create(finance);
        fetchData();
    };

    const handleEdit = async (id: number) => {
        const description = prompt("Nova descrição:") || "";
        const amount = parseFloat(prompt("Novo valor:") || "0");
        await service.update(id, { description, amount });
        fetchData();
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Deseja realmente excluir?")) return;
        await service.delete(id);
        fetchData();
    };

    return (
        <div>
            <h1>Finanças</h1>
            <FinanceForm onSubmit={handleCreate} />
            <FinanceList finances={finances} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
