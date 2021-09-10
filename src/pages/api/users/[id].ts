import { UserResType } from 'types/user'
import { NextRoute } from 'types/next'

const user: NextRoute<UserResType> = (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    if (id === '1') {
      const response = {
        success: true,
        message: 'Fetch completed!',
        user: { name: 'Miguel', id: 1 }
      }

      res.status(200).json(response)
    }
  }
}

export default user
