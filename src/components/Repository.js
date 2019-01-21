import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'


const isPrivate = (event) => {
    if (event === true) {
        return 'Yes'
    }
    else return 'No' 
}

const formatDate = (event) => {
    const data = new Date(event);
    const d = data.getDate().toString();
    const m = (data.getMonth() + 1).toString();
    const ano = data.getFullYear();
    const dia = (d.length === 1) ? '0' + d : d;
    const mes = (m.length === 1) ? '0'+ m : m;
    return dia + '/' + mes + '/' + ano;
}

//repositoryData.owner.avatar_url


const Repository = ({ repositoryData }) => (    
    <GroupList>
        <List>
            <ListGroupItem><Title>Repository name: </Title>{repositoryData.full_name}</ListGroupItem>
            <ListGroupItem><Title>Description: </Title>{repositoryData.description}</ListGroupItem>
            <ListGroupItem><Title>Private: </Title>{isPrivate(repositoryData.private)}</ListGroupItem>
            <ListGroupItem><Title>Created at: </Title>{formatDate(repositoryData.created_at)}</ListGroupItem>
            <ListGroupItem><Title>Language: </Title>{repositoryData.language}</ListGroupItem>                           
        </List>
        <ListCount>
            <ListGroupItem><Title>Stars: </Title>{repositoryData.stargazers_count}</ListGroupItem>
            <ListGroupItem><Title>Watchers: </Title>{repositoryData.watchers_count}</ListGroupItem>
            <ListGroupItem><Title>Issue: </Title>{repositoryData.open_issues_count}</ListGroupItem>    
        </ListCount>
    </GroupList>
)

const GroupList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const Title = styled.span`
    font-weight: 700;
`

const List = styled(ListGroup)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 1024px;
`

const ListCount = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    min-height: 75px;
    max-height: 100px;
`

const mapStateToProps = (state) => ({
    repositoryData: state.repositoryData
})

export default connect(mapStateToProps, null)(Repository)