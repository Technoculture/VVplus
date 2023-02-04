import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { contactList } from "../components/listComponents/ContactList";
import { ContactsCard } from "../components/contacts/contactCard";

const MyContacts = ({ navigation }: any) => {
  return (
    <View>
      <FlatList
        data={contactList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile", {
                contactInfo: item,
              });
            }}
          >
            <ContactsCard contactInfo={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default MyContacts;
