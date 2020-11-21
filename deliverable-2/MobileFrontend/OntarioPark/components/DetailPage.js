import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const DetailPage = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Title Text</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            //   source={require("../assets/cat.jpg")}
            source={{
              uri:
                "https://images.thestar.com/94hUqxqULxO_6DkLuGlGtybCMeo=/1086x724/smart/filters:cb(1589149873510)/https://www.thestar.com/content/dam/thestar/news/canada/2020/05/09/more-than-500-ontario-parks-and-conservation-areas-will-reopen-monday/tab_na_enviro3_002.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi
            tincidunt augue interdum velit euismod in pellentesque massa.
            Malesuada fames ac turpis egestas. Semper auctor neque vitae tempus
            quam pellentesque nec. Tincidunt id aliquet risus feugiat. Penatibus
            et magnis dis parturient montes nascetur ridiculus mus. Tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Vitae elementum curabitur vitae nunc sed. Tortor dignissim convallis
            aenean et tortor at risus viverra adipiscing. Egestas integer eget
            aliquet nibh praesent tristique magna sit. Congue eu consequat ac
            felis donec et odio pellentesque. Et malesuada fames ac turpis.
            Bibendum enim facilisis gravida neque convallis a cras. Quis auctor
            elit sed vulputate mi sit amet mauris commodo. Phasellus egestas
            tellus rutrum tellus pellentesque eu tincidunt tortor. Habitasse
            platea dictumst vestibulum rhoncus est. Habitasse platea dictumst
            quisque sagittis purus sit amet. Elementum eu facilisis sed odio.
            Vitae tortor condimentum lacinia quis vel eros. Semper auctor neque
            vitae tempus. Nisl purus in mollis nunc sed id. Nunc scelerisque
            viverra mauris in aliquam. Elementum facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi. Pretium aenean pharetra magna ac.
            Ornare massa eget egestas purus viverra accumsan in nisl nisi.
            Molestie at elementum eu facilisis sed odio morbi quis commodo.
            Volutpat maecenas volutpat blandit aliquam etiam. Non quam lacus
            suspendisse faucibus interdum posuere. Morbi leo urna molestie at.
            Adipiscing elit pellentesque habitant morbi tristique senectus. Sit
            amet mauris commodo quis imperdiet. Quis eleifend quam adipiscing
            vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh
            ipsum consequat. Mattis molestie a iaculis at erat pellentesque
            adipiscing commodo. Porta lorem mollis aliquam ut porttitor. At
            risus viverra adipiscing at in tellus integer feugiat scelerisque.
            Tortor aliquam nulla facilisi cras fermentum odio eu feugiat
            pretium. Turpis egestas pretium aenean pharetra magna ac placerat
            vestibulum. Integer feugiat scelerisque varius morbi enim nunc
            faucibus a pellentesque. Amet mattis vulputate enim nulla aliquet
            porttitor lacus luctus accumsan. Et tortor at risus viverra
            adipiscing at in tellus integer. Nunc eget lorem dolor sed. Faucibus
            in ornare quam viverra orci sagittis eu volutpat odio. Sed faucibus
            turpis in eu mi. Quis hendrerit dolor magna eget est lorem ipsum
            dolor. Purus sit amet volutpat consequat mauris nunc. Leo urna
            molestie at elementum eu facilisis sed odio morbi. Eu turpis egestas
            pretium aenean pharetra. Ipsum dolor sit amet consectetur adipiscing
            elit duis. Nulla at volutpat diam ut venenatis tellus in. Massa
            sapien faucibus et molestie. Ut etiam sit amet nisl. Massa sed
            elementum tempus egestas sed sed. Ac auctor augue mauris augue
            neque. Sed vulputate odio ut enim blandit volutpat maecenas. Urna id
            volutpat lacus laoreet non curabitur gravida arcu. Faucibus ornare
            suspendisse sed nisi lacus sed viverra. At ultrices mi tempus
            imperdiet nulla malesuada pellentesque. Imperdiet proin fermentum
            leo vel orci porta non. Proin libero nunc consequat interdum varius
            sit amet mattis vulputate. Morbi tempus iaculis urna id volutpat
            lacus laoreet non. Sit amet aliquam id diam maecenas ultricies mi.
            Sed turpis tincidunt id aliquet risus feugiat. Faucibus vitae
            aliquet nec ullamcorper sit amet risus nullam. Imperdiet massa
            tincidunt nunc pulvinar sapien et. Laoreet suspendisse interdum
            consectetur libero id faucibus nisl tincidunt eget. Consequat
            interdum varius sit amet mattis vulputate enim nulla. Sociis natoque
            penatibus et magnis dis. Faucibus nisl tincidunt eget nullam non
            nisi est. Sodales ut eu sem integer. Gravida in fermentum et
            sollicitudin ac. Sagittis orci a scelerisque purus semper eget duis.
            Nibh ipsum consequat nisl vel pretium lectus quam id. Netus et
            malesuada fames ac turpis egestas. Id cursus metus aliquam eleifend
            mi. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.
            Rhoncus dolor purus non enim praesent elementum facilisis. Ut tellus
            elementum sagittis vitae. Scelerisque felis imperdiet proin
            fermentum leo vel orci porta. Fermentum et sollicitudin ac orci
            phasellus egestas tellus rutrum tellus. Aliquam purus sit amet
            luctus. Diam sit amet nisl suscipit adipiscing bibendum. Diam ut
            venenatis tellus in metus vulputate eu scelerisque felis. Vitae
            semper quis lectus nulla at volutpat. Purus faucibus ornare
            suspendisse sed nisi lacus sed viverra tellus. Ac tortor vitae purus
            faucibus ornare suspendisse sed nisi lacus. Amet cursus sit amet
            dictum sit amet justo donec. Orci nulla pellentesque dignissim enim
            sit amet venenatis urna cursus. Turpis cursus in hac habitasse
            platea dictumst quisque sagittis. Vitae purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Aliquam id diam maecenas
            ultricies mi eget mauris pharetra. Elementum tempus egestas sed sed
            risus pretium quam vulputate. Congue eu consequat ac felis donec et
            odio. Et netus et malesuada fames ac turpis egestas maecenas
            pharetra. Sem fringilla ut morbi tincidunt augue interdum velit
            euismod in. Sit amet consectetur adipiscing elit pellentesque. Orci
            eu lobortis elementum nibh tellus molestie. Scelerisque fermentum
            dui faucibus in ornare quam viverra orci. Quam pellentesque nec nam
            aliquam sem et tortor. Sem nulla pharetra diam sit amet nisl
            suscipit adipiscing. Mi bibendum neque egestas congue. Aliquet enim
            tortor at auctor urna nunc id cursus. Vel orci porta non pulvinar
            neque laoreet. Nisi quis eleifend quam adipiscing vitae proin. Neque
            viverra justo nec ultrices. Sit amet consectetur adipiscing elit
            duis. Eu mi bibendum neque egestas congue quisque. Sed arcu non odio
            euismod lacinia at quis. Mi quis hendrerit dolor magna eget est
            lorem ipsum dolor. Non blandit massa enim nec dui nunc mattis. Leo a
            diam sollicitudin tempor id eu nisl nunc mi. Venenatis tellus in
            metus vulputate eu. Volutpat lacus laoreet non curabitur gravida
            arcu ac. Ipsum dolor sit amet consectetur. Venenatis urna cursus
            eget nunc. A diam maecenas sed enim ut sem viverra aliquet eget.
            Euismod elementum nisi quis eleifend. Dolor purus non enim praesent
            elementum facilisis leo. Semper viverra nam libero justo laoreet
            sit. Turpis tincidunt id aliquet risus feugiat in. Augue interdum
            velit euismod in pellentesque massa placerat. Mattis molestie a
            iaculis at erat pellentesque adipiscing commodo. Aliquam malesuada
            bibendum arcu vitae elementum curabitur. Non nisi est sit amet
            facilisis magna. Etiam tempor orci eu lobortis elementum nibh
            tellus. Ac orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Volutpat maecenas volutpat blandit aliquam etiam erat
            velit scelerisque in. Blandit massa enim nec dui nunc mattis enim ut
            tellus. Pellentesque pulvinar pellentesque habitant morbi tristique.
            At risus viverra adipiscing at in tellus integer. Lacus laoreet non
            curabitur gravida arcu ac tortor dignissim convallis. Ultrices dui
            sapien eget mi proin. Nam at lectus urna duis convallis convallis
            tellus. Elementum tempus egestas sed sed. Cum sociis natoque
            penatibus et magnis dis parturient montes nascetur. Scelerisque
            eleifend donec pretium vulputate. Faucibus purus in massa tempor.
            Augue interdum velit euismod in pellentesque massa placerat duis.
            Sit amet consectetur adipiscing elit ut aliquam purus sit. Orci
            sagittis eu volutpat odio facilisis mauris sit amet. Vestibulum
            lectus mauris ultrices eros in cursus. Iaculis urna id volutpat
            lacus laoreet non curabitur gravida.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 20,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "black",
    fontSize: 30,
  },
  imageContainer: {
    width: 300,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    width: 300,
    alignItems: "center",
  },
});

export default DetailPage;
