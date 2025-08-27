import { useState } from "react";

type Props = {
    onSubmit: (descricao: string, valor: number) => void;
};

export function FinanceForm({ onSubmit }: Props) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState(0);

    const handleSubmit = () => {
        onSubmit(descricao, valor);
        setDescricao("");
        setValor(0);
    };

    return (
        <div>
            <input
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                placeholder="Descrição"
            />
            <input
                type="number"
                value={valor}
                onChange={e => setValor(Number(e.target.value))}
                placeholder="Valor"
            />
            <button onClick={handleSubmit}>Criar Lançamento</button>
        </div>
    );
}
