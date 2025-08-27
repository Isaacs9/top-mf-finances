import { Finance } from "../domain/finance.entity";
import { FinanceItem } from "./FinanceItem";

type Props = {
    finances: Finance[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};

export function FinanceList({ finances, onEdit, onDelete }: Props) {
    return (
        <ul>
            {finances.map(f => (
                <FinanceItem key={f.id} finance={f} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </ul>
    );
}
