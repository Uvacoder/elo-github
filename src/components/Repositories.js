import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRepository } from '../redux-flow/reducers/repository/action-creators'

const Repositories = ({ data, onClick }) => (
    <Main id='container'>
        {data.total_count > 0 ?
        (data.items.map((r) => {
            return (
                <div key={r.id}>
                    <List>
                        <ListGroupItem onClick={onClick(r.owner.login, r.name)}>
                            <Link to={`/${r.owner.login}/${r.name}`}><NameList>{r.name}</NameList></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <User>
                                <Photo src={r.owner.avatar_url} alt='avatar' />
                                    {r.owner.login}                              
                            </User>
                        </ListGroupItem>
                    </List>
                </div>
            )
        }))
        : 
        (<div>Type an existing repository</div>)}
    </Main>
)

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const List = styled(ListGroup)`
   width: 500px;
`

const NameList = styled.div`
    font-size: 17px;
    font-weight: 700;
    &:hover {
        text-decoration: underline;
    }
`

const User = styled.div`
   display: flex;
   font-size: 15px;
   align-items: center;
`

const Photo = styled.img`       
    height: 75px;
    border-radius: 25%;
    margin-right: 10px;
`
const mapDispatchToProps = (dispatch) => ({
    onClick: (username, repo) => (event) => {
        event.preventDefault()
        dispatch(fetchRepository(username, repo))
      }
})

export default connect(null, mapDispatchToProps)(Repositories)