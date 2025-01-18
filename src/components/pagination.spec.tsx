import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const warpper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(warpper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(warpper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should display the right amount of pages and results', async () => {
    const user = userEvent.setup()

    const warpper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = warpper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})
