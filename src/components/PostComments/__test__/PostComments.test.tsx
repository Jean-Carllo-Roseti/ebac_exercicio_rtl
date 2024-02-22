import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar 2 comentários', async () => {
        render(<Post />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Figurinha legal' } });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Famoso Baby Batman, kkkk' } });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        const comentarios = screen.getAllByText(/Figurinha legal|Famoso Baby Batman, kkkk/);
        expect(comentarios).toHaveLength(2);
    });
}); 