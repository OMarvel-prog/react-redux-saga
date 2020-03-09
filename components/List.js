import React from 'react';
import PropTypes from 'prop-types';
import {DeleteButton, ListContainer, ListItem, ListTitle} from './styled';
import {FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import ArrowSvgIcon from '../svg/ArrowSvgIcon';
import TrashSvgIcon from '../svg/TrashSvgIcon';

function List({data, navigation, place, deletable, arrow, onDeletePressed, from}) {

    const renderItem = ({item}) => {
        const onPressItem = () => navigation.navigate(place, {id: item.id, vid: item.vid, title: item.title, from});
        const onPressDeleteItem = () => onDeletePressed(item);
        return (
            <ListItem onPress={onPressItem}>
                <ListTitle>{item.title}</ListTitle>
                {deletable && (
                    <DeleteButton onPress={onPressDeleteItem}>
                        <TrashSvgIcon/>
                    </DeleteButton>
                )}
                {arrow && (
                    <ArrowSvgIcon/>
                )}
            </ListItem>
        )
    };

    return (
        <ListContainer>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </ListContainer>
    );
}

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    })),
    place: PropTypes.string.isRequired,
    from: PropTypes.string,
    deletable: PropTypes.bool,
    arrow: PropTypes.bool,
    onDeletePressed: PropTypes.func
};

export default withNavigation(List);