import {ScrollView,SafeAreaView ,Button} from "react-native"
import {CategoryItem} from '../components/CategoryItem'
import {TrainingTableStyle} from '../Styles/TrainingTableStyle'

function renderCategoryItem({category , user} ){

    return <CategoryItem key={category.category} categoryName = {category.category} imageURI={category.image} userID={user}/>
}

export function AllCategorys ({route,navigation}) {
    const {STATIC_CATEGORY,userID } = route.params;
    //console.log(userID)
    return(
        <ScrollView style={TrainingTableStyle.ScrollView}>
            <Button title='הוספת קטגוריה' color='#64c0b5' onPress={() => navigation.navigate('AddCategory',{userID: userID})} />
            <SafeAreaView style={TrainingTableStyle.container}> 
            
            {STATIC_CATEGORY.map((cat) => renderCategoryItem({category:cat,user:userID}))}

            </SafeAreaView>
        </ScrollView>

    )
}

