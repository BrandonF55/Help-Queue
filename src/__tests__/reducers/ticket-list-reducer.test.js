import ticketListReducer from '../../reducers/ticket-list-reducer'

describe('ticketListReducer', () => {

 const currentState = {
 1: {
  names: 'Bodie and Kadysha',
  location: '4b',
  issue: 'Redux action is not working properly',
  id: 1
 },
 2: {
  names: 'Boo and Twyla',
  location: '4b',
  issue: 'There are no treats left',
  id: 2
 }
}


  let action
  const ticketData = {
    names: 'Bodie and Kadysha',
    location: '4b',
    issue: 'Redux action is not working properly',
    id: 1,
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({})
  })

  test('Should add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id,
    }

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    })
  })

  test('Should successfully delete a ticket', () => {
   action = {
    type: 'DELETE_TICKET',
    id: 1
   };
   expect(ticketListReducer(currentState, action)).toEqual({
     2: {
       names: 'Boo and Twyla',
       location: '4b',
       issue: 'There are no treats left',
       id: 2,
     }
   })
  })
})
