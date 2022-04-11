import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './style';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const {createTransaction} = useTransactions();

    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
        await createTransaction({ title, amount, category, type })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose()
    }
    return (
        <Modal overlayClassName="react-modal-overlay" className="react-modal-content" isOpen={isOpen} onRequestClose={onRequestClose}>
            <button type='button' className='react-modal-close' onClick={onRequestClose}>
                <img src={closeImg} alt="close modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar transacao</h2>
                <input type="text" onChange={event=>setTitle(event.target.value)} placeholder='Titulo' />
                <input type="number" onChange={event=>setAmount(Number(event.target.value))} placeholder='Valor' />

                <TransactionTypeContainer>
                    <RadioBox type='button' isActive={type==='deposit'} activeColor="green" onClick={()=>setType('deposit')}>
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type='button' isActive={type==='withdraw'} activeColor="red" onClick={()=>setType('withdraw')}>
                        <img src={outcomeImg} alt="saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" onChange={event=>setCategory(event.target.value)} placeholder='Categoria' />
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}