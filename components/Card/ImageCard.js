import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function ImageCard({ title, subTitle, image, handleTutorial }) {
    return (
        <Card style={{ margin: 12 }}>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{subTitle}</Paragraph>
            </Card.Content>
            <Card.Cover source={image} />
            <Card.Actions>
                <Button onPress={handleTutorial} >Tutorial</Button>
                <Button>Acessar</Button>
                <Button>Video</Button>
            </Card.Actions>
        </Card>
    );
}