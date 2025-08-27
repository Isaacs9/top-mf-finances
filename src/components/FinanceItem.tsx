import {Finance} from "../domain/FinanceEntity";

type Props = {
    finance: Finance;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
};

export function FinanceItem({ finance, onEdit, onDelete }: Props) {
    return (
        <li>
            {finance.description} - {finance.amount}
            <button onClick={() => onEdit(finance.id)}>Editar</button>
            <button onClick={() => onDelete(finance.id)}>Excluir</button>
        </li>
    );
}
