import streamlit as st
from material_login import checkout

# Test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run material_login/example.py`


# logged_in_data = checkout("Insert your account")

# st.write(logged_in_data)

# if bool(logged_in_data) and logged_in_data['username'] == USERNAME and logged_in_data['password'] == PASSWORD:
#     st.balloons()


create_order_data = checkout()

# st.write(create_order_data["provider"])


# Initialize connection.
conn = st.connection('mysql', type='sql')

if create_order_data["provider"] != None:
    # conn.query("CALL online_transaction({}, {}, {}, {}, {});".format(110, 10300, "Debit Card", create_order_data["provider"], create_order_data["qty"]))
   df =  conn.query("CALL online_transaction(110, 10300,'Debit Card','BCA',1);")
   df = df.loc[:,~df.columns.duplicated()].copy()
   st.dataframe(df)



