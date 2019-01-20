import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Repository extends Component {
    constructor() {
        super()
        this.state = {
            full_name: '',
            name: '',
            description: '',
            stargazers_count: 0,
            watchers_count: 0,
            open_issues_count: 0,
            language: ''
        }
    }
    
    componentDidMount = () => {
        fetch(`https://api.github.com/repos/${this.props.match.params.username}/${this.props.match.params.repo}`)
        .then(
          async results => {
            try {
              return await results.json()
            }
            catch(error) { console.log('error: ', error)
        }})
        .then(data => {
          console.log(data)
          this.setState({
            avatar_url: data.owner.avatar_url,
            full_name: data.full_name,
            description: data.description,
            private: data.private,
            created_at: data.created_at,
            stargazers_count: data.stargazers_count,
            watchers_count: data.watchers_count,
            open_issues_count: data.open_issues_count,
            language: data.language
          })
        })
      }

    isPrivate = (event) => {
        if (event === true) {
            return 'Yes'
        }
        else return 'No' 
    }

    formatDate = (event) => {
        const data = new Date(event);
        const d = data.getDate().toString();
        const m = (data.getMonth() + 1).toString();
        const ano = data.getFullYear();        
        const dia = (d.length === 1) ? '0' + d : d;
        const mes = (m.length === 1) ? '0'+ m : m;
        return dia + '/' + mes + '/' + ano;
    }

    render() {
        return (
            <GroupList>
                <List>
                    <ListPhoto>
                            <Photo src={this.state.avatar_url} alt='avatar' />
                            <Name>{this.props.match.params.username}</Name>
                    </ListPhoto>
                    <ListGroupItem><Title>Repository name: </Title>{this.state.full_name}</ListGroupItem>
                    <ListGroupItem><Title>Description: </Title>{this.state.description}</ListGroupItem>
                    <ListGroupItem><Title>Private: </Title>{this.isPrivate(this.state.private)}</ListGroupItem>
                    <ListGroupItem><Title>Created at: </Title>{this.formatDate(this.state.created_at)}</ListGroupItem>
                    <ListGroupItem><Title>Language: </Title>{this.state.language}</ListGroupItem>                           
                </List>
                <ListCount>
                    <ListGroupItem><Title>Stars: </Title>{this.state.stargazers_count}</ListGroupItem>
                    <ListGroupItem><Title>Watchers: </Title>{this.state.watchers_count}</ListGroupItem>
                    <ListGroupItem><Title>Issue: </Title>{this.state.open_issues_count}</ListGroupItem>    
                </ListCount>
            </GroupList>
        )
    }
}

const GroupList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const ListPhoto = styled(ListGroupItem)`
    display: flex;
    align-items: center;
`

const Photo = styled.img`
    border-radius: 25%;
    height: 75px;
    margin-right: 20px;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
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
    height: 65px;
`

Repository.propTypes = {
    full_name: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number,
    watchers_count: PropTypes.number,
    open_issues_count: PropTypes.number
}

export default Repository