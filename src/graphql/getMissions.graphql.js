import { gql } from '@apollo/client'

const GET_MISSIONS = gql`
{
  launchesPast(limit: 12) {
    mission_name
    links {
      wikipedia
      flickr_images
    }
    launch_date_local
    launch_success
  }
  company {
    ceo
    name
    links {
      elon_twitter
      twitter
      website
      flickr
    }
    headquarters {
      address
      city
      state
    }
    summary
  }
}
`

export default GET_MISSIONS
