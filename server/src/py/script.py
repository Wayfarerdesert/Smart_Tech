import plotly.graph_objects as go
import plotly.express as px
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.manifold import TSNE
from sklearn.metrics import silhouette_score
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler, normalize
from tensorflow.keras import backend as K
from IPython.display import display
from tensorflow.keras.callbacks import ReduceLROnPlateau, EarlyStopping, ModelCheckpoint, LearningRateScheduler
from tensorflow.keras.utils import plot_model
from tensorflow.keras.initializers import glorot_uniform
from tensorflow.keras.models import Model, load_model
from tensorflow.keras.layers import Input, Add, Dense, Activation, ZeroPadding2D, BatchNormalization, Flatten, Conv2D, AveragePooling2D, MaxPooling2D, Dropout
from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras import layers, optimizers
from tensorflow.python.keras import Sequential
import tensorflow as tf
import cv2
import zipfile
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd
import sys
import logging
import time
import os



logging.info('Cargando librarias ...')
print('Cargando librarias ...')
# Aquí puedes realizar las operaciones que necesites con el archivo
# Por ejemplo, leer el contenido del archivo y realizar algún cálculo


# %matplotlib inline
logging.info('Librarias cargadas.')
print('Librarias cargadas.')

# Función para visualizar el recuento de elementos en una columna determinada
# Ten en cuenta que Plotly es una librería de gráficos de Python que crea gráficos interactivos con calidad de publicación.
# Compruébalo en: https://plotly.com/python/
# Nota: px (plotly_express) es un wrapper de alto nivel entorno a plotly para una rápida exploración de datos y generación de figuras
# Compruébalo en: https://plotly.github.io/plotly_express


def barplot_visualization(x, codcli, codfile,carpeta):
    fig = plt.Figure(figsize=(12, 6))
    fig = px.bar(x=sales_df[x].value_counts().index, y=sales_df[x].value_counts(
    ), color=sales_df[x].value_counts().index, height=600)
    fig.show()

    # Guardar el gráfico como un archivo PNG
    nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_'+x+'.png'
    time.sleep(5)
    fig.write_image(nameFile)

# Función para agregar variables ficticias para reemplazar variables categóricas


def dummies(x):
    dummy = pd.get_dummies(sales_df[x])
    sales_df.drop(columns=x, inplace=True)
    return pd.concat([sales_df, dummy], axis=1)


def verif(column, media, data):
    dif = ((abs(media-data)*100)/mean_qty)
    maximo = round(sales_df[column].max(), 2)
    if dif < 15:
        return f'MEDIO respecto a un valor máximo de {maximo}'
    else:
        if mean_qty < data:
            if dif > 75:
                return f'MUY ALTO respecto a un valor máximo de {maximo}'
            else:
                return f'ALTO respecto a un valor máximo de {maximo}'
        else:
            if dif < 75:
                return f'MUY BAJO respecto a un valor máximo de {maximo}'
            else:
                return f'BAJO respecto a un valor máximo de {maximo}'

# Función para generar el informe interpretativo de cada cluster


def generate_cluster_report(cluster_stats, num_clusters,carpeta):
    # Nombre del archivo de texto en el que deseas grabar los prints de salida
    nombre_archivo = carpeta+'/OUT_'+carpeta+'.txt'
    # Redirigir la salida estándar a un archivo
    with open(nombre_archivo, 'w') as archivo:
        sys.stdout = archivo

        for i in range(num_clusters):
            cluster_name = f"Cluster {i}"
            cluster_mean_qty = cluster_stats['QUANTITYORDERED'].iloc[i]

            cluster_mean_price = cluster_stats['PRICEEACH'].iloc[i]
            cluster_mean_sales = cluster_stats['SALES'].iloc[i]
            cluster_mean_msrp = cluster_stats['MSRP'].iloc[i]
            cluster_mean_mes = cluster_stats['MONTH_ID'].iloc[i]
            cluster_mean_any = cluster_stats['YEAR_ID'].iloc[i]

            # Agregar más columnas de estadísticas descriptivas si es necesario

            print(f'# {cluster_name}:')
            print(
                f'Este grupo representa a los clientes que compran artículos en una cantidad media de ~ {cluster_mean_qty:.2f} artículos. ')
            print(f'Nivel de compra por cantidad de artículos:', verif('QUANTITYORDERED',
                  mean_qty, cluster_mean_qty), 'y respecto a la media de los pedidos', mean_qty, '\n')

            print(
                f'Este grupo compran artículos en una precio medio de ~ {cluster_mean_price:.2f} €. ')
            print(f'Nivel de compra por precio de artículos:', verif('PRICEEACH', mean_precio,
                  cluster_mean_price), 'y respecto a la media de los pedidos', mean_precio, '\n')

            print(
                f'También corresponden a las ventas totales de ~ {cluster_mean_sales:.2f} €. ')
            print(f'Nivel de compra por ventas totales:', verif('SALES', mean_total,
                  cluster_mean_sales), 'y respecto a la media de los pedidos', mean_total, '\n')

            print('Mes de compra', mes[int(cluster_mean_mes)-1])
        # Restaurar la salida estándar
    sys.stdout = sys.__stdout__


if __name__ == "__main__":



    logging.info('Inicio Anáisis ')
    print('Inicio Anáisis ')
    if len(sys.argv) > 1:
        file_path = sys.argv[1]

        codcli = file_path[5:7]
        codfile = file_path[8:13]
        carpeta = codcli + "_" + codfile
        os.makedirs(carpeta, exist_ok=True)

        

        logging.basicConfig(
            filename=carpeta+'/LOG_'+carpeta+'.log',  # Nombre del archivo de registro
            # Nivel de registro (puedes cambiarlo según tus necesidades)
            level=logging.INFO,
            # Formato del mensaje de registro
            format='%(asctime)s - %(levelname)s - %(message)s')
    else:
        file_path ='FILE_01_75432.xlsx'
        codcli = file_path[5:7]
        codfile = file_path[8:13]
        carpeta = codcli + "_" + codfile
        logging.basicConfig(
    filename=carpeta+'/LOG_'+carpeta+'.log',  # Nombre del archivo de registro
    # Nivel de registro (puedes cambiarlo según tus necesidades)
    level=logging.INFO,
    # Formato del mensaje de registro
    format='%(asctime)s - %(levelname)s - %(message)s'
)
    print("Por favor, especifique la ruta del archivo como argumento.")
    # pip install openpyxl

    #sales_df = pd.read_csv(file_path, encoding = 'unicode_escape')
    rutaFile = "../server/uploads/"
    sales_df = pd.read_excel(rutaFile+file_path)
    logging.info('Información cargada desde fichero Excel')
    print('Información cargada desde fichero Excel')

    # Convertir la fecha del pedido en formato de fecha y hora
    sales_df['ORDERDATE'] = pd.to_datetime(sales_df['ORDERDATE'])
    logging.info("Cambio columna fecha tipo datetime.")

    # Crear las columnas MONTH_ID y YEAR_ID
    sales_df['MONTH_ID'] = sales_df['ORDERDATE'].dt.month
    sales_df['YEAR_ID'] = sales_df['ORDERDATE'].dt.year
    logging.info("Se crea columna MES y AÑO a partir de FECHA DE ORDEN.")

    # eliminamos eliminar la ciudad, la dirección1, el número de teléfono, el nombre del contacto, el apellido del contacto y el nombre del contacto
    # no son necesarios para el análisis.

    df_drop = ['ADDRESSLINE1', 'POSTALCODE', 'CITY', 'TERRITORY', 'PHONE','STATE', 'CUSTOMERNAME', 'ORDERNUMBER']
    sales_df = sales_df.drop(df_drop, axis=1)
    logging.info('Eliminadas columnas no necesarias.')
    print('Eliminadas columnas no necesarias.')

    # ANALISIS EXPLORATORIO DE LOS DATOS Y LIMPIEZA - PARTE 1

    # Encontrar filas duplicadas
    duplicates = sales_df.duplicated()

    # Contar el número de filas duplicadas
    num_duplicates = duplicates.sum()

    # Imprimir el resumen
    print(f'Número de filas duplicadas:{num_duplicates}')
    logging.info(f'Número de filas duplicadas:{num_duplicates}')

    if num_duplicates > 0:
        # Eliminar filas duplicadas
        sales_df = sales_df.drop_duplicates()
        logging.info('Borrado de duplicados')
    else:
        logging.info('No hay duplicados')

    # Contar los valores nulos en cada columna
    null_counts = sales_df.isnull().sum()

    # Imprimir el recuento de valores nulos en cada columna
    print("Recuento de valores nulos en cada columna:")
    print(null_counts)
    logging.info("Recuento de valores nulos en cada columna:")
    logging.info(null_counts)

    # Rellenar datos faltantes en columnas numéricas con el valor medio de cada columna
    columnas_numericas = sales_df.select_dtypes(
        include=['int64', 'float64']).columns
    for columna in columnas_numericas:
        valor_medio = sales_df[columna].mean()
        sales_df[columna].fillna(valor_medio, inplace=True)
        logging.info(
            f"Columna '{columna}' rellenada con valor medio: {valor_medio}")

    logging.info("Rellenamos datos faltantes de columnas numericas con valor medio de la columna.")

    # Rellenar datos faltantes en columnas numéricas con el valor medio de cada columna
    columnas_obj = sales_df.select_dtypes(include=['object']).columns
    columnas_obj

    # Calcular la moda de cada columna de tipo objeto
    column_modes = sales_df.mode().iloc[0]

    # Rellenar las columnas de tipo objeto con la moda
    sales_df = sales_df.fillna(column_modes)

    logging.info("Rellenamos datos faltantes de columnas objeto con Moda de la columna.")

    # Rellenar la columna QTR_ID


    def rellenar_qtr_id(MONTH_ID):
        if MONTH_ID in [1, 2, 3]:
            return 1
        elif MONTH_ID in [4, 5, 6]:
            return 2
        elif MONTH_ID in [7, 8, 9]:
            return 3
        else:
            return 4
    

    sales_df["QTR_ID"] = sales_df["MONTH_ID"].apply(rellenar_qtr_id)

    logging.info("Rellenamos la columna QTR_ID con el trimestre correspondiente al mes.")

    # Completo la columna DealSize según la media

    media_sales = sales_df['SALES'].mean()
    logging.info("Calculamos la media de las ventas.")
    

    min_sales = sales_df['SALES'].min()
    max_sales = sales_df['SALES'].max()

    q1 = (min_sales + media_sales)/2
    q3 = (max_sales + media_sales)/2
    sales_df['DEALSIZE'] = sales_df.apply(lambda row: 'SMALL' if row['SALES'] < q1
                                                else 'BIG' if row['SALES'] > q3
                                                else 'MEDIUM', axis=1)
    


    

    logging.info("Creamos y rellenamos la columna DEALSIZE con el tamaño de las ventas en relación a la media.")


    sales_df['COUNTRY'].value_counts().index
    sales_df['COUNTRY'].value_counts()

    # Graficar
    barplot_visualization('COUNTRY', codcli, codfile,carpeta)
    logging.info('Gráfico COUNTRY creado')
    print('Gráfico COUNTRY creado')

    barplot_visualization('PRODUCTLINE', codcli, codfile,carpeta)
    logging.info('Gráfico PRODUCTLINE creado')
    print('Gráfico PRODUCTLINE creado')

    barplot_visualization('DEALSIZE', codcli, codfile,carpeta)
    logging.info('Gráfico DEALSIZE creado')
    print('Gráfico DEALSIZE creado')

    # Obtengamos variables ficticias '
    sales_df = dummies('COUNTRY')
    sales_df = dummies('PRODUCTLINE')
    sales_df = dummies('DEALSIZE')

    y = pd.Categorical(sales_df['PRODUCTCODE'])
    y = pd.Categorical(sales_df['PRODUCTCODE']).codes

    # Dado que el número de código de producto tiene 109 valores únicos, si agregamos variables one-hot,
    # serían 109 columnas adicionales, podemos evitarlo usando la codificación categórica
    # Esta no es la forma óptima de lidiar con esto, pero es importante evitar la maldición de la dimensionalidad.
    sales_df['PRODUCTCODE'] = pd.Categorical(sales_df['PRODUCTCODE']).codes

    # ANALISIS EXPLORATORIO DE LOS DATOS Y LIMPIEZA - PARTE 2
    # Agrupamos los datos según la fecha del pedido
    sales_df_group = sales_df.groupby(by="ORDERDATE").sum()

    fig = px.line(x=sales_df_group.index,y=sales_df_group.SALES, title='Sales')
    fig.show()
    nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_21.png'
    time.sleep(5)
    fig.write_image(nameFile)

    # Podemos eliminar 'ORDERDATE' y quedarnos con el resto de datos relacionados con la fecha como 'MONTH'
    sales_df.drop("ORDERDATE", axis=1, inplace=True)

    plt.figure(figsize=(20, 20))
    corr_matrix = sales_df.iloc[:, :9].corr()
    sns.heatmap(corr_matrix, annot=True, cbar=False)
    plt.title("Matriz de Correlación")
    time.sleep(5)
    nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_22.png'

    plt.savefig(nameFile)

    # Vamos a representar distribuciones
    # Distplot muestra el (1) histograma, (2) kde plot y (3) rug plot.
    # (1) Histograma: es una visualización gráfica de datos que usa barras con varias alturas. Cada barra agrupa los números en rangos y las barras más altas muestran que hay más datos en ese rango.
    # (2) Densidad: la estimación de la función de densidad se utiliza para visualizar la densidad de probabilidad de una variable continua.
    # (3) Gráfico de alfombra: gráfico de datos para una única variable cuantitativa, que se muestra como marcas a lo largo de un eje (gráfico de dispersión unidimensional).

    import plotly.figure_factory as ff
    import random

    plt.figure(figsize=(10, 10))

    for i in range(5):
        if sales_df.columns[i] != 'ORDERNUMBER':
            col_name = sales_df.columns[i]
            fig = ff.create_distplot(
                [sales_df[col_name].apply(lambda x: float(x))], ['distplot'])
            fig.update_layout(title_text=col_name)
            fig.show()
            nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_23_'+str(i)+'.png'
            time.sleep(5)
            fig.write_image(nameFile)

    # Visualizar la relación entre variables usando parcelas
    plt.figure(figsize=(15, 15))

    fig = px.scatter_matrix(
        sales_df, dimensions=sales_df.columns[:5], color='MONTH_ID')

    fig.update_layout(title='Sales Data', width=1100, height=1100,)
    fig.show()
    time.sleep(5)
    nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_24.png'
    plt.savefig(nameFile)
    print(sales_df.info())
    # Escalamos los datos
    scaler = StandardScaler()
    sales_df_scaled = scaler.fit_transform(sales_df)

    # buscamos numero de centroides K
    scores = []
    range_values = range(1, 5)
    for k in range_values:
        kmeans = KMeans(n_clusters=k)
        kmeans.fit(sales_df_scaled)
        scores.append(kmeans.inertia_)

    diff = np.diff(scores)
    diff2 = np.diff(diff)
    optimal_k = range_values[np.argmax(diff2) + 1]

    print("Número óptimo de clusters:", optimal_k)
    optimal_k+=1
    # Agrupar los datos usando k-means
    kmeans = KMeans(optimal_k)
    kmeans.fit(sales_df_scaled)
    labels = kmeans.labels_

    # Echemos un vistazo a los centros de los clústeres
    cluster_centers = pd.DataFrame(data=kmeans.cluster_centers_, columns=[sales_df.columns])

    # Para entender lo que significan estos números, realicemos una transformación inversa
    cluster_centers = scaler.inverse_transform(cluster_centers)
    cluster_centers = pd.DataFrame(data=cluster_centers, columns=[sales_df.columns])

    labels = np.array(labels)

    num_clusters = len(np.unique(labels))

    sales_df['Cluster'] = labels

    cluster_stats = sales_df.groupby('Cluster').mean()

    # Obtener estadísticas descriptivas del DataFrame
    sales_stats = sales_df.describe()

    # Obtener el número de clusters basado en la columna 'cluster'
    num_clusters = len(np.unique(labels))

    # Obtener las estadísticas de cada cluster
    cluster_stats = sales_df.groupby('Cluster').mean()
    mean_qty = round(sales_df['QUANTITYORDERED'].mean(), 2)
    mean_precio = round(sales_df['PRICEEACH'].mean(), 2)
    mean_total = round(sales_df['SALES'].mean(), 2)
    mean_mes = round(sales_df['MONTH_ID'].mean(), 2)

    mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
           'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    # Generar el informe interpretativo para cada cluster
    generate_cluster_report(cluster_stats, num_clusters, carpeta)

    y_kmeans = kmeans.fit_predict(sales_df_scaled)
    # Agregar una etiqueta (qué clúster) correspondiente a cada punto de datos
    sale_df2_cluster = pd.concat([sales_df, pd.DataFrame({'cluster': labels})], axis=1)

    # Representar un histograma para cada característica según el clúster al que pertenece
    for i in sales_df.columns[:5]:
        plt.figure(figsize=(30, 6))
        for j in range(optimal_k):
            plt.subplot(1, 5, j+1)
            cluster = sale_df2_cluster[sale_df2_cluster['cluster'] == j]
            cluster[i].hist()
            plt.title('{}    \nCluster - {} '.format(i, j))
        plt.show()
        nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_25.png'
        time.sleep(5)
        plt.savefig(nameFile)

    # APLICAR EL ANÁLISIS DE COMPONENTES PRINCIPALES Y VISUALIZAR LOS RESULTADOS

    # Reducir los datos originales a 3 dimensiones usando PCA para visualizar los clústeres
    pca = PCA(n_components=3)
    principal_comp = pca.fit_transform(sales_df_scaled)

    pca_df = pd.DataFrame(data=principal_comp, columns=['pca1', 'pca2', 'pca3'])

    # Concatenar las etiquetas de los clústeres al dataframe
    pca_df = pd.concat([pca_df, pd.DataFrame({'cluster': labels})], axis=1)

    # Visualizar los clústeres con 3D-Scatterplot
    fig = px.scatter_3d(pca_df, x='pca1', y='pca2', z='pca3',color='cluster', symbol='cluster', size_max=18, opacity=0.7)
    fig.update_layout(margin=dict(l=0, r=0, b=0, t=0))

    pca = PCA(n_components=2)
    principal_comp = pca.fit_transform(sales_df_scaled)

    pca_df = pd.DataFrame(data=principal_comp, columns=['pca1', 'pca2'])
    pca_df = pd.concat([pca_df, pd.DataFrame({'cluster': labels})], axis=1)

    ax = sns.scatterplot(x="pca1", y="pca2", hue="cluster", data=pca_df, palette=["red", "green", "blue", "pink", "yellow"])
    plt.show()
    nameFile = carpeta +'/IMG_'+codcli+'_'+codfile+'_26.png'
    time.sleep(5)
    plt.savefig(nameFile)