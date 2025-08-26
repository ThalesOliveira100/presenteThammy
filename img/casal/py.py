import os

def generate_image_data_file(folder_path, output_file_path):
    """
    Gera um arquivo de texto com metadados das imagens em uma pasta.

    Args:
        folder_path (str): O caminho para a pasta que contém as imagens.
        output_file_path (str): O caminho e nome do arquivo de saída.
    """
    if not os.path.isdir(folder_path):
        print(f"Erro: O caminho '{folder_path}' não é uma pasta válida.")
        return

    # Extensões de imagem comuns para filtrar
    valid_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp')

    # Lista para armazenar os caminhos relativos das imagens
    image_list = []
    
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path) and filename.lower().endswith(valid_extensions):
            # Obtém apenas o nome do arquivo
            image_list.append(filename)

    if not image_list:
        print(f"Nenhuma imagem encontrada na pasta '{folder_path}'.")
        return

    # Ordena a lista para garantir a ordem correta
    image_list.sort()

    print(f"Gerando arquivo de dados para {len(image_list)} imagens...")
    
    try:
        with open(output_file_path, 'w', encoding='utf-8') as f:
            for image_name in image_list:
                # Extrai o número do nome do arquivo (ex: 'img001.jpg' -> '001')
                # A expressão regular abaixo é mais robusta para diferentes formatos
                # de nome de arquivo, mas para este caso, podemos simplificar
                # assumindo o formato 'imgXXX.ext'
                
                # Exemplo simples, assuming the 'imgXXX.ext' format
                number_part = ''.join(filter(str.isdigit, image_name))
                caption_text = f"Dois sorrisos mais que perfeitos!" # Caption fixa
                
                line = f"{{ src: \"./img/casal/{image_name}\", caption: \"{caption_text}\" }},\n"
                f.write(line)

        print(f"Arquivo '{output_file_path}' gerado com sucesso!")
        
    except IOError as e:
        print(f"Erro ao escrever no arquivo '{output_file_path}': {e}")


# --- Exemplo de uso ---
# Substitua os caminhos abaixo conforme a sua necessidade.
# `folder_with_images` deve ser a pasta onde as imagens estão.
# `output_file` é o nome do arquivo que será gerado.

# Exemplo: pasta 'casal_fotos' no mesmo diretório do script
folder_with_images = 'C:\\Users\\brazil\\Desktop\\presente_Thamiris\\img\\casal'
output_file = 'image_data.txt'

# --- Apenas para demonstração, criaremos a pasta e arquivos de exemplo ---
if not os.path.exists(folder_with_images):
    os.makedirs(folder_with_images)
    print(f"Criada a pasta de exemplo: '{folder_with_images}'")
    # Cria arquivos temporários para simular imagens renomeadas do script anterior
    with open(os.path.join(folder_with_images, 'img001.jpg'), 'w') as f: f.write('')
    with open(os.path.join(folder_with_images, 'img002.png'), 'w') as f: f.write('')
    with open(os.path.join(folder_with_images, 'img003.jpeg'), 'w') as f: f.write('')


# Chama a função para gerar o arquivo
generate_image_data_file(folder_with_images, output_file)