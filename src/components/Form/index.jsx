import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculaIMC = () => {
        let alturaAjustada = altura / 100;
        let conta = peso / (alturaAjustada * alturaAjustada);
        let resultado = conta.toFixed(2);

        if (!verificaCampos()) {
            return (
                <span className={styles.vazio}>
                    Por gentileza informe 3 dígitos na altura e 2 digitos no
                    peso.
                </span>
            );
        } else {
            if (resultado < 18.5) {
                return (
                    <span className={styles.info}>
                        Seu IMC é {resultado} e você está muito magro.
                    </span>
                );
            } else if (resultado < 24.9) {
                return (
                    <span className={styles.info}>
                        Seu IMC é {resultado} e você está com peso normal.
                    </span>
                );
            } else if (resultado < 29.9) {
                return (
                    <span className={styles.info}>
                        Seu IMC é {resultado} e você está em sobrepeso.
                    </span>
                );
            } else if (resultado < 39.9) {
                return (
                    <span className={styles.info}>
                        Seu IMC é {resultado} e você está com obesidade.
                    </span>
                );
            } else {
                return (
                    <span className={styles.info}>
                        Seu IMC é {resultado} e você está com obesidade grave.
                    </span>
                );
            }
        }
    };

    let verificaCampos = () => {
        if (peso < 10 || altura < 100) {
            return false;
        } else return true;
    };

    return (
        <form className={styles.container}>
            <div>
                <label htmlFor="altura">Informe sua altura em cm:</label>
                <input
                    type="number"
                    name="altura"
                    id="altura"
                    placeholder="190"
                    onChange={({ target }) => setAltura(target.value)}
                />
            </div>
            <div>
                <label htmlFor="peso">Informe seu peso em kgs:</label>
                <input
                    type="number"
                    name="peso"
                    id="peso"
                    placeholder="90"
                    onChange={({ target }) => setPeso(target.value)}
                />
            </div>
            {calculaIMC()}
        </form>
    );
};

export default Form;
