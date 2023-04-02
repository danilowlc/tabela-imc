import styles from './Header.module.css'


const Header = () => {

    return (
        <header className={styles.header}>
            <div className='container'>
                <h1 className={styles.titulo}>
                    Tabela IMC
                </h1>
                <p className={styles.definicao}>
                    O IMC é um índice que mede se você está abaixo, dentro ou acima do peso, de acordo com a relação entre seu peso e altura. Descubra como calcular esse índice, quais os valores ideais, as exceções da tabela padrão, a especificidade do IMC para crianças e jovens e muito mais neste artigo completo.
                </p>
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">IMC</th>
                                <th scope="col">Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menor do que 18,5</td>
                                <td>Abaixo do peso</td>
                            </tr>
                            <tr>
                                <td>Entre 18,5 e 24,9</td>
                                <td>Peso normal</td>
                            </tr>
                            <tr>
                                <td>Entre 25 e 29,9</td>
                                <td>Acima do peso (sobrepeso)</td>
                            </tr>
                            <tr>
                                <td>Entre 30 e 34,9</td>
                                <td>Obesidade I</td>
                            </tr>
                            <tr>
                                <td>Entre 35 e 39,9</td>
                                <td>Obesidade II</td>
                            </tr>
                            <tr>
                                <td>Maior do que 40</td>
                                <td>Obesidade III</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </header>
    )
}

export default Header